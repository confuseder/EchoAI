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
    title: '三角函数导论',
    description: '三角函数的基本概念和应用',
  },
  {
    id: '2',
    type: 'text',
    content:
      '三角函数是描述直角三角形中角度和边长关系的函数。最基本的三角函数有：正弦(sin)、余弦(cos)和正切(tan)。',
    step: 2,
    title: '基本三角函数',
    description: 'sin、cos、tan的定义',
  },
  {
    id: '3',
    type: 'text',
    content: '正弦函数(sin θ)：表示对边与斜边的比值。sin θ = 对边/斜边',
    step: 3,
    title: '正弦函数',
    description: 'sin θ的定义与性质',
  },
  {
    id: '4',
    type: 'text',
    content: '余弦函数(cos θ)：表示邻边与斜边的比值。cos θ = 邻边/斜边',
    step: 4,
    title: '余弦函数',
    description: 'cos θ的定义与性质',
  },
  {
    id: '5',
    type: 'text',
    content:
      '正切函数(tan θ)：表示对边与邻边的比值。tan θ = 对边/邻边 = sin θ/cos θ',
    step: 5,
    title: '正切函数',
    description: 'tan θ的定义与性质',
  },
  {
    id: '6',
    type: 'text',
    content: '今天我们将学习基础代数：方程式求解的基本方法。',
    step: 6,
    title: '代数基础',
    description: '线性方程的解法',
  },
  {
    id: '7',
    type: 'text',
    content:
      '一次方程的标准形式是 ax + b = 0，其中 x 是未知数，a 和 b 是常数，且 a ≠ 0。',
    step: 7,
    title: '一次方程',
    description: '一次方程的标准形式与求解',
  },
  {
    id: '8',
    type: 'text',
    content:
      '二次方程的标准形式是 ax² + bx + c = 0，其中 a、b、c 是常数，且 a ≠ 0。',
    step: 8,
    title: '二次方程',
    description: '二次方程的标准形式与求解公式',
  },
  {
    id: '9',
    type: 'text',
    content:
      '二次方程的求解公式：x = (-b ± √(b² - 4ac)) / 2a，其中判别式 Δ = b² - 4ac。',
    step: 9,
    title: '判别式',
    description: '二次方程的判别式与解的情况',
  },
  {
    id: '10',
    type: 'text',
    content: '函数是描述两个集合之间元素对应关系的数学概念，表示为 y = f(x)。',
    step: 10,
    title: '函数概念',
    description: '函数的定义、表示与性质',
    children: [
      {
        id: '10-1',
        type: 'text',
        content: '函数的定义域是函数中自变量 x 的取值范围。',
        step: 10,
        title: '定义域',
        description: '函数定义域的概念与求解',
      },
    ],
  },
  {
    id: '11',
    type: 'text',
    content: "导数是函数变化率的度量，表示为 f'(x) 或 df/dx。",
    step: 11,
    title: '导数概念',
    description: '导数的定义与几何意义',
  },
  {
    id: '12',
    type: 'text',
    content: '导数的几何意义是函数曲线上某点的切线斜率。',
    step: 12,
    title: '导数的几何意义',
    description: '切线与斜率',
  },
  {
    id: '13',
    type: 'text',
    content: '积分是导数的逆运算，分为不定积分和定积分两种。',
    step: 13,
    title: '积分概念',
    description: '积分的定义与类型',
  },
  {
    id: '14',
    type: 'text',
    content: '牛顿第一定律：物体在没有外力作用时会保持静止或匀速直线运动状态。',
    step: 14,
    title: '牛顿第一定律',
    description: '惯性定律的内容与应用',
  },
  {
    id: '15',
    type: 'text',
    content: '牛顿第二定律：物体加速度与所受合外力成正比，与质量成反比。F = ma',
    step: 15,
    title: '牛顿第二定律',
    description: '力与加速度的关系',
  },
  {
    id: '16',
    type: 'text',
    content:
      '牛顿第三定律：作用力与反作用力大小相等、方向相反、作用在不同物体上。',
    step: 16,
    title: '牛顿第三定律',
    description: '作用力与反作用力',
  },
  {
    id: '17',
    type: 'text',
    content: '概率是对事件发生可能性的度量，取值范围在0到1之间。',
    step: 17,
    title: '概率论基础',
    description: '概率的定义与性质',
  },
  {
    id: '18',
    type: 'text',
    content:
      '条件概率是已知一个事件发生的情况下，另一个事件发生的概率。P(A|B) = P(A∩B) / P(B)',
    step: 18,
    title: '条件概率',
    description: '条件概率的定义与计算',
  },
  {
    id: '19',
    type: 'text',
    content: '英语中的动词时态主要分为：现在时、过去时、将来时和完成时。',
    step: 19,
    title: '英语时态',
    description: '英语动词时态的基本分类',
  },
  {
    id: '20',
    type: 'text',
    content:
      '现在完成时表示过去发生的动作对现在造成的影响，或从过去持续到现在的动作。',
    step: 20,
    title: '现在完成时',
    description: '现在完成时的用法与结构',
  },
  {
    id: '21',
    type: 'text',
    content: '化学元素周期表是按照元素原子序数排列的元素表。',
    step: 21,
    title: '元素周期表',
    description: '元素周期表的结构与规律',
  },
  {
    id: '22',
    type: 'text',
    content: '有机化学是研究含碳化合物的化学分支，碳氢化合物是有机化学的基础。',
    step: 22,
    title: '有机化学',
    description: '有机化合物的分类与特性',
  },
  {
    id: '23',
    type: 'text',
    content: '生物细胞是生命的基本单位，可分为原核细胞和真核细胞两大类。',
    step: 23,
    title: '细胞结构',
    description: '细胞的组成与功能',
  },
  {
    id: '24',
    type: 'text',
    content: 'DNA是脱氧核糖核酸的缩写，是遗传信息的主要载体。',
    step: 24,
    title: 'DNA结构',
    description: 'DNA的双螺旋结构与功能',
  },
  {
    id: '25',
    type: 'text',
    content: '你对以上知识点有什么具体的问题吗？',
    step: 25,
    title: '问答环节',
    description: '解答学习疑问',
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
