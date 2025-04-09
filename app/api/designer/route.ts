import { DesignerResponse, DesignerStep } from '@/app/types/designer'

interface RequestBody {
  prompt?: string
  chat_id: string
  refs?: string
  step?: string
}

export async function POST(request: Request) {
  const { chat_id, prompt: userPrompt } = (await request.json()) as RequestBody

  // Simulate AI processing time (2 seconds)
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Create AI response after delay
  const aiResponse: DesignerStep = {
    id: 1,
    type: 'text',
    content: generateResponse(userPrompt || ''),
    timestamp: new Date().toISOString(),
  }

  const response: DesignerResponse = {
    chat_id: chat_id || 'mock-chat-id',
    input: userPrompt || '',
    steps: [aiResponse],
  }

  return new Response(JSON.stringify(response), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

// Helper function to generate more interesting AI responses
function generateResponse(prompt: string): string {
  if (!prompt) return "I didn't receive any input. How can I help you today?"

  if (
    prompt.toLowerCase().includes('hello') ||
    prompt.toLowerCase().includes('hi')
  ) {
    return "Hello! I'm your AI assistant. How can I help you today?"
  }

  if (prompt.toLowerCase().includes('teach')) {
    return `I'd be happy to teach you about that! Let's start with the basics. ${prompt.replace(
      'teach me',
      'involves',
    )} is a fascinating subject. What specific aspect would you like to explore first?`
  }

  if (prompt.includes('?')) {
    return `That's a great question about "${prompt}". Based on my knowledge, I would analyze this as follows...`
  }

  return `I've processed your request about "${prompt}". Here's what I can share based on my knowledge: this is a complex topic with multiple aspects to consider. Would you like me to elaborate on any specific part?`
}
