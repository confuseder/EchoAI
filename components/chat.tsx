'use client'

import { DesignerResponse } from '@/app/types/designer'
import { useState, useEffect } from 'react'
import MessageBox from './message-box'
import ToolBox from './tool-box'
import PromptArea from './prompt-area'

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
        const messages = [
          ...steps.map((step) => ({
            avatar: 'https://picsum.photos/200/300',
            role: 'assistant' as const,
            content: step.content,
          })),
        ]
        setMessages((msg) => [...msg, ...messages])
        setIsLoading(false)
      }
    }
    fetchMessages()
  }, [chatId])

  return (
    <div className="flex flex-row w-full h-full gap-2">
      <div className="flex flex-3/4 h-full flex-col gap-2">
        <div className="flex flex-3/4 w-full bg-[rgba(255,255,255,0.5)] rounded-lg"></div>
        <div className="flex flex-1/4 w-full bg-[rgba(255,255,255,0.5)] rounded-lg"></div>
      </div>
      <div className="flex flex-col flex-1/4 h-full bg-[rgba(255,255,255,0.5)] p-3 rounded-lg">
        <div className="flex flex-8/10 w-full">
          <div className="w-full h-full overflow-y-scroll">
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
        <div className="flex flex-2/10 w-full">
          <PromptArea next={true} />
        </div>
      </div>
    </div>
  )
}
