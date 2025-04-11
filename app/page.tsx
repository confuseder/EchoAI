'use client'

import createChat from '@/apis/create'
import PromptArea from '@/components/prompt-area'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

function getPeriod(): 'morning' | 'afternoon' | 'evening' {
  const now = new Date()
  const hours = now.getHours()
  if (hours < 12) return 'morning'
  if (hours < 18) return 'afternoon'
  return 'evening'
}

export default function Home() {
  const router = useRouter()
  const [prompt, setPrompt] = useState()
  async function start() {
    if (!prompt) return
    console.log(prompt)
    // const { chat_id } = await createChat(prompt)
    const chat_id = '123'
    router.push(`/chat/${chat_id}`)
  }

  return (
    <div className="flex flex-col w-full h-full pt-48">
      <div className="text-4xl flex self-center">
        Good {getPeriod()}, let's get started!
      </div>
      <div className="w-full h-72 px-56 py-10">
        <div className="w-full h-full mx-auto max-w-[900px]">
          <PromptArea setPrompt={setPrompt} onSend={start} />
        </div>
      </div>
    </div>
  )
}
