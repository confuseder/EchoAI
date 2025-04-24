import { API_URL } from "@echoai/utils";

export interface Position {
  // Based on usage in chalk.post.ts, this seems to be a component position type
  // Exact structure can be added when needed
}

export interface Operation {
  // Based on usage in chalk.post.ts, this seems to be an operation type
  // Exact structure can be added when needed
}

export interface ChalkRequestBody {
  chat_id: string;
  prompt: string;
  components?: Position[];
  document?: string;
  model?: string;
  stream?: boolean;
}

export interface ChalkResponse {
  content: string;
  operations: Operation[];
  delta?: {
    operation: Operation
  }
}

export default async function fetchChalk(
  body: ChalkRequestBody,
  callback?: (chunk: ChalkResponse) => void,
  token?: string
): Promise<ChalkResponse | void> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'text/event-stream',
  }
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${API_URL}/chat/chalk`, {
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

        // Process data line by line
        const lines = buffer.split('\n');
        buffer = lines.pop() || ''; // Keep the last incomplete line

        for (const line of lines) {
          if (line.trim()) {
            try {
              const parsed = JSON.parse(line);
              callback?.(parsed);
            } catch (e) {
              console.error('Failed to parse line:', line);
            }
          }
        }
      }
      // Process remaining buffer
      if (buffer.trim()) {
        try {
          const parsed = JSON.parse(buffer);
          callback?.(parsed);
        } catch (e) {
          console.error('Failed to parse final buffer:', buffer);
        }
      }
    } finally {
      reader.releaseLock();
    }
    return;
  }

  return await response.json() as ChalkResponse;
} 