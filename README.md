# 交互式流程图表组件

这个项目包含两种实现的流程图表组件：

1. 基于 DOM 的静态版本 (`ChatGraph`)
2. 基于 Canvas 的交互式版本 (`ChatGraphCanvas`)

## Canvas 版本特性

Canvas 版本的流程图表提供了以下交互功能：

- **步骤点击**：点击任何节点可以触发自定义操作
- **平移**：按住并拖动画布移动整个图表
- **缩放**：使用鼠标滚轮放大或缩小图表
- **悬停效果**：当鼠标悬停在节点上时，节点会变色以提供视觉反馈

## 使用方法

在组件中引入并使用：

```tsx
import { ChatGraphCanvas } from '@/components/chat-graph-canvas'

// 在组件内部使用
const steps = [...] // 步骤数据

const handleStepClick = (step) => {
  // 处理点击事件
  console.log('Clicked step:', step.title)
}

return (
  <ChatGraphCanvas
    steps={steps}
    onStepClick={handleStepClick}
  />
)
```

## 数据结构

图表使用以下数据结构：

```typescript
interface DesignerStep {
  id: number
  type: string
  content: string
  timestamp: string
  step: number
  title: string
  description: string
  children?: DesignerStep[] // 分支节点
}
```

## 交互指南

1. **查看图表**：图表显示流程中的各个步骤及其分支
2. **与节点互动**：点击任何节点查看更详细的信息
3. **导航图表**：
   - 拖动：按住并拖动画布移动视图
   - 缩放：使用鼠标滚轮放大或缩小视图
4. **切换视图**：使用界面上的按钮在 Canvas 和 DOM 版本之间切换

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
