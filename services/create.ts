import supabase from "./lib/supabase";
import { SYSTEM, USER } from "@/workflow/designer/prompts";
import { prompt } from "@/utils";

export interface CreateRequestBody {
  prompt?: string;
}

export interface CreateResponse {
  chat_id: string;
}

export async function create(
  body: CreateRequestBody,
  headers: Headers,
): Promise<Response> {
  const token = headers.get("Authorization")?.split(" ")[1];
  console.log(process.env.UNAUTHORIZED_MODE)
  if (!token && process.env.UNAUTHORIZED_MODE !== "true") {
    return new Response("Unauthorized", { status: 401 });
  }
  const userId =
    process.env.UNAUTHORIZED_MODE === "true"
      ? process.env.UNAUTHORIZED_MODE_USER_ID
      : (await supabase.auth.getUser(token)).data.user?.id;

  const { data, error } = await supabase
    .from("chats")
    .insert({
      uid: userId,
      designer_context: JSON.stringify([
        {
          role: "system",
          content: SYSTEM,
        },
        body.prompt
          ? {
            role: "user",
            content: prompt(USER, {
              prompt: body.prompt,
            }),
          }
          : void 0,
      ]),
      displayed_messages: JSON.stringify([
        {
          role: 'user',
          content: body.prompt
        }
      ]),
    })
    .select("uid, id")
    .single();

  if (error) {
    console.log(error)
    return new Response("Internal Server Error: " + error.message, { status: 500 });
  }

  return new Response(
    JSON.stringify({
      chat_id: data.id,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}
