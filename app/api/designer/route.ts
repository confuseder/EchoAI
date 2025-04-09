import { DesignerResponse, DesignerStep } from '@/app/types/designer'

interface RequestBody {
  prompt?: string
  chat_id: string
  refs?: string
  step?: string
}

const MockSteps = [
  {
    id: 1,
    type: 'text',
    content: '今天我们来学习三角函数的基础知识。',
  },
  {
    id: 2,
    type: 'text',
    content:
      '三角函数是描述直角三角形中角度和边长关系的函数。最基本的三角函数有：正弦(sin)、余弦(cos)和正切(tan)。',
  },
  {
    id: 3,
    type: 'text',
    content: '正弦函数(sin θ)：表示对边与斜边的比值。sin θ = 对边/斜边',
  },
  {
    id: 4,
    type: 'text',
    content: '余弦函数(cos θ)：表示邻边与斜边的比值。cos θ = 邻边/斜边',
  },
  {
    id: 5,
    type: 'text',
    content:
      '正切函数(tan θ)：表示对边与邻边的比值。tan θ = 对边/邻边 = sin θ/cos θ',
  },
  {
    id: 6,
    type: 'text',
    content:
      '让我们以角度为30°为例。在30°的直角三角形中：sin 30° = 0.5，cos 30° = 0.866，tan 30° = 0.577',
  },
  {
    id: 7,
    type: 'text',
    content: '三角函数在周期性现象的描述中非常重要，如波动、振动、电磁波等。',
  },
  {
    id: 8,
    type: 'text',
    content: '你对三角函数有什么具体的问题吗？',
  },
] as DesignerStep[]

export async function POST(request: Request) {
  const { chat_id, prompt: userPrompt } = (await request.json()) as RequestBody

  // Simulate AI processing time (2 seconds)
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response: DesignerResponse = {
    chat_id: chat_id || 'mock-chat-id',
    input: userPrompt || '',
    steps: MockSteps,
  }

  return new Response(JSON.stringify(response), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
