import { API_URL } from "../env";

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

export default async function fetchSpeaker(
  body: SpeakerRequestBody, 
  callback?: (chunk: SpeakerResponse) => void,
  token?: string
): Promise<SpeakerResponse | void> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'text/event-stream',
  }
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${API_URL}/chat/speaker`, {
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

        callback?.({ content: buffer });
      }
      // 处理最后的buffer
      if (buffer) {
        callback?.({ content: buffer });
      }
    } finally {
      reader.releaseLock();
    }
    return;
  }

  return await response.json() as SpeakerResponse;
}