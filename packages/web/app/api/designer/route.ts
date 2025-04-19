import { designer } from "@/services/designer";

export async function POST(request: Request) {
  const body = await request.json();
  return designer(body, request.headers);
}
