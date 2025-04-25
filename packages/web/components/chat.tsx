'use client'

import { DesignerStep, StepBranch } from '@echoai/workflow/designer'
import { useState, useEffect, useRef, Suspense } from 'react'
import MessageBox from './message-box'
import ToolBox from './tool-box'
import PromptArea from './prompt-area'
import { Timeline } from './timeline'
import { DisplayedMessage, GetChatResponse, Operation } from '@echoai/api'
import { marked } from 'marked'
import { Board } from './board'
import connection from '@/lib/connection'
import { useClearParamOnLoad } from '@/hooks/use-clear-params-onload'

export const END = Symbol('END_FLAG')

interface TipMessageBoxType {
  role: 'tip'
  content: string
  isLoading?: boolean
}

interface ChatMessageBoxType {
  avatar?: string
  role: 'user' | 'assistant'
  content: string
}

type MessageBoxType = TipMessageBoxType | ChatMessageBoxType

const convert = (displayedMessages: DisplayedMessage[]): MessageBoxType[] => {
  return displayedMessages.map((msg, index) => {
    if (msg.role === 'user') {
      return {
        avatar: 'https://picsum.photos/200/300',
        role: 'user' as const,
        content: msg.content
      }
    } else if (msg.role === 'processor') {
      return {
        role: 'tip' as const,
        content: msg.content,
      }
    } else {
      return {
        role: 'assistant' as const,
        content: msg.content
      }
    }
  })
}

const findStep = (stepId: string, branches: StepBranch[]): DesignerStep | null => {
  for (const branch of branches) {
    for (const step of branch.steps) {
      if (step.step.toString() === stepId.toString()) {
        return step
      }
    }
  }
  return null
}

const findStepNext = (stepId: string, branches: StepBranch[]): DesignerStep | null | typeof END => {
  for (const [index, branch] of branches.entries()) {
    for (const [stepIndex, step] of branch.steps.entries()) {
      if (step.step.toString() === stepId.toString()) {
        if (stepIndex < branch.steps.length - 1) {
          return branch.steps[stepIndex + 1]
        } else if (branch.start && branch.end) {
          return findStep(branch.end, branches)
        } else {
          return END
        }
      }
    }
  }
  return null
}

export function Chat({
  chatId,
  info,
  status,
}: {
  chatId: string
  info: GetChatResponse
  status: 'submitted' | 'streaming' | 'ready' | 'error'
}) {
  const [fetchStatus, setFetchStatus] = useState<'submitted' | 'streaming' | 'ready' | 'error'>(status)
  const [isLoading, setIsLoading] = useState(false)
  const messages = useRef<MessageBoxType[]>(convert(info.context))
  const [updateTrigger, setUpdateTrigger] = useState(0)
  const [branches, setBranches] = useState<StepBranch[]>(info.branches)
  const currentStep = useRef<string | null | typeof END>(info.context[info.context.length - 1].step ?? null)
  const [prompt, setPrompt] = useState<string>('')
  const calledRef = useRef(false)
  const [nextAvailablity, setNextAvailablity] = useState<boolean>(status === 'ready')
  const [boardContent, setBoardContent] = useState<string>('')

  // ---TEST-FUNCTIONS---
  const operations = useRef<Operation[]>([])
  // --------------------

  useClearParamOnLoad('new')

  const requestDesigner = async (inputPrompt: string) => {
    console.log('fetchMessages called', { fetchStatus, inputPrompt });
    
    try {
      calledRef.current = true
      setFetchStatus('streaming')
      setIsLoading(true)
      
      messages.current.push(...(prompt ? [{
        avatar: 'https://picsum.photos/200/300',
        role: 'user' as const,
        content: inputPrompt,
      }] : []),
      {
        role: 'tip' as const,
        content: 'Designing...',
        isLoading: true,
      })
      setUpdateTrigger(v => v + 1)

      const designerResponse = await connection.chat.designer({
        chat_id: chatId,
        prompt,
        step: currentStep.current as string,
      })
      
      setBranches(designerResponse.branches)
      currentStep.current = designerResponse.branches[designerResponse.branches.length - 1].steps[0].step
      messages.current.length = 0
      messages.current.push(...convert(designerResponse.displayed_messages))
      setUpdateTrigger(v => v + 1)

      let content = ''
      await request(content, designerResponse.branches)
      setNextAvailablity(true)
      
    } catch (error) {
      console.error('Error in fetchMessages:', error);
      setFetchStatus('error');
    } finally {
      setIsLoading(false)
    }
  }

  const requestSpeaker = async (
    content: string,
    currentBranches: StepBranch[]
  ) => {
    const step = findStep(currentStep.current as string, currentBranches)!
    console.log('requestSpeaker', step, currentStep.current, currentBranches)
    await connection.chat.speaker({
      chat_id: chatId,
      stream: true,
      ...step,
    }, (chunk) => {
      setUpdateTrigger(v => v + 1)
      
      if (content.length > 0) messages.current.pop()
      content += chunk.content
      messages.current.push({
        role: 'assistant' as const,
        content,
      })
      setUpdateTrigger(v => v + 1)
    })
  }

  const requestChalk = async (prompt: string) => {
    const chalkResponse = await connection.chat.chalk({
      chat_id: chatId,
      prompt,
      stream: true,
      document: '<root></root>'
    }, (chunk) => {
      operations.current.length = 0
      operations.current.push(...chunk.operations)
      console.log('operations', operations.current)
      setUpdateTrigger(v => v + 1)
    })
  }

  const requestLayout = async (
    currentBranches: StepBranch[]
  ) => {
    const step = findStep(currentStep.current as string, currentBranches)!
    const layoutResponse = await connection.chat.layout({
      chat_id: chatId,
      prompt,
      ...step,
    })
    await requestChalk(layoutResponse.content)
    setUpdateTrigger(v => v + 1)
  }

  const request = async (
    content: string,
    currentBranches: StepBranch[]
  ) => {
    await Promise.all([
      requestSpeaker(content, currentBranches),
      requestLayout(currentBranches),
    ])
  }

  useEffect(() => {
    console.log('useEffect triggered', { calledRef: calledRef.current });
    if (calledRef.current) return;
    if (fetchStatus === 'submitted') {
      requestDesigner(prompt);
    }
  }, [chatId]);

  async function handleNext() {
    setNextAvailablity(false)
    const nextStep = findStepNext(currentStep.current as string, branches)
    if (nextStep === END) {
      // TODO: END
    } else {
      currentStep.current = nextStep?.step!
      let content = ''
      await request(content, branches)
      setUpdateTrigger(v => v + 1)
    }
    setNextAvailablity(true)
  }

  function handleSend() {
    console.log('send', prompt)
    requestDesigner(prompt)
    setPrompt('')
  }

  return (
    <div className="flex w-full gap-2 h-full">
      <div className="flex flex-col h-full w-2/3 gap-y-2">
        <div className="flex flex-3/4 h-full bg-gray-100 rounded-lg">
          <Board operations={
            operations.current.map(operation => JSON.stringify(operation, null, 2))
          } />
        </div>
        <div className="flex flex-1/4 h-full bg-gray-100 rounded-lg">
          <Timeline branches={branches} />
        </div>
      </div>
      <div className="flex flex-col w-1/3 gap-y-2 bg-gray-100 rounded-lg p-4">
        <div className="flex flex-1 overflow-y-auto">
          <div className="size-full">
            {messages.current.map((message, index) => (
              (message.role === 'tip') ? (
                <ToolBox
                  content={message.content}
                  isLoading={message.isLoading ?? false}
                  key={index}
                />
              ) : (
                <MessageBox
                  avatar={message.avatar ?? 'https://picsum.photos/200/300'}
                  role={message.role}
                  content={message.content}
                  key={index}
                />
              )
            ))}
          </div>
        </div>
        <div className="h-[200px] w-full ">
          <PromptArea onNext={handleNext} onSend={handleSend} setPrompt={setPrompt} next={nextAvailablity} />
        </div>
      </div>
    </div>
  )
}
