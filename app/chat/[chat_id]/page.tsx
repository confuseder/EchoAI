'use client'

import createChat from "@/apis/create";
import MessageBox from "@/components/message-box";
import PromptArea from "@/components/prompt-area";
import ToolBox from "@/components/tool-box";
import { useRouter } from "next/router";
import { useState } from "react";

interface MessageBoxType {
  avatar: string,
  role: 'user' | 'assistant',
  content: string,
}
interface ToolBoxType {
  content: string,
  isLoading: boolean,
}

export default function ChatPage() {
  return (
    <div className="flex flex-row w-full h-full gap-2">
      <div className="flex flex-3/4 h-full flex-col gap-2"> 
        <div className="flex flex-3/4 w-full bg-[rgba(255,255,255,0.5)] rounded-lg"></div>
        <div className="flex flex-1/4 w-full bg-[rgba(255,255,255,0.5)] rounded-lg"></div>
      </div>
      <div className="flex flex-col flex-1/4 h-full bg-[rgba(255,255,255,0.5)] p-3 rounded-lg">
        <div className="flex flex-8/10 w-full">
          <div className="w-full h-full overflow-y-scroll">
            {
              [
                {
                  avatar: '/images/profile.png',
                  role: 'user',
                  content: 'Hello, how are you?',
                },
                {
                  avatar: '/images/profile.png',
                  role: 'assistant',
                  content: 'I am fine, thank you!',
                },
                {
                  content: 'Loading...',
                  isLoading: true,
                },
              ].map((message, index) => message.role ? <MessageBox key={index} {...message} /> : <ToolBox key={index} {...message} />)
            }
          </div>
        </div>
        <div className="flex flex-2/10 w-full">
          <PromptArea next={false}/>
        </div>
      </div>
    </div>
  )
}