import { create } from "@/services/create";

const runtime = 'edge'

export async function POST(request: Request) {
  const body = await request.json();
  return await create(body, request.headers);
}
