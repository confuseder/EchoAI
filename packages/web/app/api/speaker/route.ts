import { speaker } from "@/services/speaker";

export const runtime = 'edge';

export async function POST(request: Request) {
  const body = await request.json();
  const response = await speaker(body, request.headers);
  
  if (body.stream) {
    const headers = new Headers(response.headers);
    headers.set('Content-Type', 'text/event-stream');
    headers.set('Cache-Control', 'no-cache');
    headers.set('Connection', 'keep-alive');
    
    return new Response(response.body, {
      headers,
      status: response.status,
    });
  }
  
  return response;
}
