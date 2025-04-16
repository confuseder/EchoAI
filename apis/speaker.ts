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

  console.log('response', response , body.stream)
  if (body.stream) {
    console.log('stream', body.stream)
    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error('No reader available');
    }

    const decoder = new TextDecoder();
    
    try {
      while (true) {
        const { done, value } = await reader.read();
        console.log('done', done)
        if (done) break;

        console.log('value', value)

        // 直接解码并回调
        const text = decoder.decode(value, { stream: true });
        console.log('text', text)
        if (text) {
          callback?.({ content: text });
        }
      }
    } finally {
      reader.releaseLock();
    }
    return;
  }

  return await response.json() as SpeakerResponse;
}