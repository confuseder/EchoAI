import { create } from "@/services/create";

export async function POST(request: Request) {
  const body = await request.json();
  return create(body, request.headers);
}
