import { SpeakerRequestBody, SpeakerResponse } from "@/services/speaker";
import { API_BASE_URL } from "@/config/app";
import supabase from "@/services/lib/supabase";

export default async function fetchSpeaker(
  body: SpeakerRequestBody, 
  callback?: (chunk: SpeakerResponse) => void
): Promise<SpeakerResponse | void> {
  const session = await supabase.auth.getSession()

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'text/event-stream',
  }
  if (session.data.session) {
    headers.Authorization = `Bearer ${session.data.session.access_token}`
  }

  const response = await fetch(`${API_BASE_URL}/speaker`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  if (body.stream) {
    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error('No reader available');
    }

    const decoder = new TextDecoder();
    let buffer = '';
    
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        
        // 按行处理数据
        const lines = buffer.split('\n');
        buffer = lines.pop() || ''; // 保留最后一个不完整的行

        for (const line of lines) {
          if (line.trim()) {
            callback?.({ content: line });
          }
        }
      }
      // 处理最后的buffer
      if (buffer.trim()) {
        callback?.({ content: buffer });
      }
    } finally {
      reader.releaseLock();
    }
    return;
  }

  return await response.json() as SpeakerResponse;
}