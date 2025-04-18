import { layout } from "@/services/layout";

const runtime = 'edge'

export async function POST(request: Request) {
  return layout(await request.json(), request.headers);
}