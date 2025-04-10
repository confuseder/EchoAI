'use client'

import { DesignerResponse, DesignerStep } from '@/app/types/designer'
import { useState, useEffect } from 'react'
import MessageBox from './message-box'
import ToolBox from './tool-box'
import PromptArea from './prompt-area'
import { ChatGraph } from './chat-graph'

interface MessageBoxType {
  avatar: string
  role: 'user' | 'assistant'
  content: string
}

export function Chat({
  chatId,
  initialMessages,
  status,
}: {
  chatId: string
  initialMessages: MessageBoxType[]
  status: 'submitted' | 'streaming' | 'ready' | 'error'
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<MessageBoxType[]>(initialMessages)
  const [totalSteps, setTotalSteps] = useState<DesignerStep[]>([])
  const [steps, setSteps] = useState<DesignerStep[]>([])

  useEffect(() => {
    const fetchMessages = async () => {
      if (status === 'submitted') {
        setIsLoading(true)
        const response = await fetch(`/api/designer`, {
          method: 'POST',
          body: JSON.stringify({
            chatId,
            prompt: 'Hello, please teach me ....',
          }),
        })
        const data: DesignerResponse = await response.json()
        const { steps } = data
        const [step, ...rest] = steps
        setTotalSteps(rest)
        setSteps([step])
        const msg = step
        const messages = [
          {
            avatar: 'https://picsum.photos/200/300',
            role: 'assistant' as const,
            content: msg.content,
          },
        ]
        setMessages((msg) => [...msg, ...messages])
        setIsLoading(false)
      }
    }
    fetchMessages()
  }, [chatId])

  function handleNext() {
    const step = totalSteps[0]
    setTotalSteps(totalSteps.slice(1))
    if (step.step !== undefined) {
      setSteps((steps) => [...steps, step])
    }
    setMessages((msg) => [
      ...msg,
      {
        avatar: 'https://picsum.photos/200/300',
        role: 'assistant' as const,
        content: step.content,
      },
    ])
  }

  function handleStepClick(step: DesignerStep) {
    console.log('clicked', step)
  }

  return (
    <div className="grid grid-cols-3 w-full h-full gap-2">
      <div className="col-span-2 flex h-full flex-col gap-2">
        <div className="flex flex-3/4 w-full bg-gray-100 rounded-lg"></div>
        <div className="flex flex-1/4 w-full bg-gray-100 rounded-lg h-[400px]">
          <ChatGraph steps={steps} onStepClick={handleStepClick} />
        </div>
      </div>
      <div className="col-span-1 flex flex-col h-full bg-gray-100 p-3 rounded-lg gap-y-2 justify-between">
        <div className="flex flex-initial w-full overflow-hidden">
          <div className="size-full overflow-y-auto px-2">
            {messages.map((message, index) => (
              <MessageBox key={index} {...message} />
            ))}
            {isLoading && (
              <ToolBox
                content="Designing..."
                isLoading={isLoading}
                key={messages.length}
              />
            )}
          </div>
        </div>
        <div className="flex h-[340px] w-full ">
          <PromptArea next={totalSteps.length > 0} onNext={handleNext} />
        </div>
      </div>
    </div>
  )
}
