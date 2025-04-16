import { ChatCompletionMessageParam } from "openai/resources.mjs";
import supabase from "./lib/supabase";
import { startSpeakerWorkflow } from "@/workflow/speaker";

export interface SpeakerRequestBody {
  chat_id: string;
  step: string
  problem: string
  knowledge: string
  explanation: string
  conclusion: string
  prompt?: string
  model?: string
  stream?: boolean
}

export interface SpeakerResponse {
  content: string
}

export async function speaker(body: SpeakerRequestBody, headers: Headers): Promise<Response> {
  const token = headers.get("Authorization")?.split(" ")[1];
  if (!token && process.env.UNAUTHORIZED_MODE !== "true") {
    return new Response("Unauthorized", { status: 401 });
  }
  const userId =
    process.env.UNAUTHORIZED_MODE === "true"
      ? process.env.UNAUTHORIZED_MODE_USER_ID
      : (await supabase.auth.getUser(token)).data.user?.id;

  const speakerContext = await supabase
    .from('chats')
    .select('uid, id, speaker_context, displayed_messages, branches')
    .eq('uid', userId)
    .eq('id', body.chat_id)
    .single();

  if (speakerContext.error) {
    console.log(speakerContext.error)
    return new Response("Internal Server Error", { status: 500 });
  }
  const context = JSON.parse(speakerContext.data.speaker_context) as ChatCompletionMessageParam[];
  
  if (body.stream) {
    // 创建一个 TransformStream 来处理流式响应
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();

    // 启动流式处理
    (async () => {
      try {
        const textStream = await startSpeakerWorkflow(context, {
          ...body,
          stream: true
        });

        const reader = textStream.getReader();
        
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          // 确保每个chunk都被正确编码并发送
          const encoder = new TextEncoder();
          const chunk = encoder.encode(value + '\n');
          await writer.write(chunk);
        }
      } catch (error) {
        console.error('Streaming error:', error);
      } finally {
        await writer.close();
        // 更新 context
        await supabase
          .from('chats')
          .update({
            speaker_context: JSON.stringify(context),
          })
          .eq('id', body.chat_id);
      }
    })();

    // 返回流式响应
    return new Response(stream.readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Transfer-Encoding': 'chunked'
      },
    });
  }

  const result = await startSpeakerWorkflow(context, body);

  const { data: updatedChat, error: updateError } = await supabase
    .from('chats')
    .update({
      speaker_context: JSON.stringify(context),
    })
    .eq('id', body.chat_id)
    .select('displayed_messages, branches, id')
    .single();

  if (updateError) {
    return new Response("Internal Server Error", { status: 500 });
  }

  return new Response(JSON.stringify({
    content: result,
  }), { status: 200 });
}
