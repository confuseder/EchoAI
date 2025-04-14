import { getChat, GetChatResponse } from "@/services/get-chat";

const runtime = 'edge'

export async function POST(request: Request) {
  const body = await request.json();
  const response = await getChat(body, request.headers);
  return response;
}