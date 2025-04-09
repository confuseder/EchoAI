import { DesignerResponse, DesignerStep } from '@/app/types/designer'

interface RequestBody {
  prompt?: string
  chat_id: string
  refs?: string
  step?: string
}

const MockSteps = [
  {
    id: '1',
    type: 'text',
    content: '今天我们来学习三角函数的基础知识。',
    step: 1,
    title: '基础概念',
    description: '直角三角形定义',
    children: [
      {
        id: '1-1',
        type: 'text',
        content: '直角三角形定义',
        step: 1,
        title: '基础概念',
        description: '直角三角形定义',
      },
    ],
  },
  {
    id: '2',
    type: 'text',
    content:
      '三角函数是描述直角三角形中角度和边长关系的函数。最基本的三角函数有：正弦(sin)、余弦(cos)和正切(tan)。',
    step: 2,
    title: '常用值',
    description: 'sin/cos/tan特殊角',
  },
  {
    id: '3',
    type: 'text',
    content: '正弦函数(sin θ)：表示对边与斜边的比值。sin θ = 对边/斜边',
    step: 3,
    title: '图像与性质',
    description: '周期性/振幅',
  },
  {
    id: '4',
    type: 'text',
    content: '余弦函数(cos θ)：表示邻边与斜边的比值。cos θ = 邻边/斜边',
    step: 4,
    title: '重要公式',
    description: '毕达哥拉斯定理',
  },
  {
    id: '5',
    type: 'text',
    content:
      '正切函数(tan θ)：表示对边与邻边的比值。tan θ = 对边/邻边 = sin θ/cos θ',
    step: 5,
    title: '应用',
    description: '解三角形/波动',
  },
  {
    id: '6',
    type: 'text',
    content:
      '让我们以角度为30°为例。在30°的直角三角形中：sin 30° = 0.5，cos 30° = 0.866，tan 30° = 0.577',
    step: 6,
    title: '三角函数基础',
    description: '三角函数是描述直角三角形中角度和边长关系的函数。',
  },
  {
    id: '7',
    type: 'text',
    content: '三角函数在周期性现象的描述中非常重要，如波动、振动、电磁波等。',
    step: 7,
    title: '应用',
    description: '波动/振动/电磁波',
  },
  {
    id: '8',
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
