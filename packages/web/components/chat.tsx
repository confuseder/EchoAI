'use client'

import { DesignerStep, StepBranch } from '@echoai/workflow/designer'
import { useState, useEffect, useRef } from 'react'
import MessageBox from './message-box'
import ToolBox from './tool-box'
import PromptArea from './prompt-area'
import { Timeline } from './timeline'
import { DisplayedMessage, GetChatResponse, Operation } from '@echoai/api'
import { Board } from './board'
import useConnection from '@/lib/connection'
import { useClearParamOnLoad } from '@/hooks/use-clear-params-onload'

export const END = Symbol('END_FLAG')

interface TipMessageBoxType {
  role: 'tip'
  content: string
  isLoading?: boolean
  key?: number
}

interface ChatMessageBoxType {
  avatar?: string
  role: 'user' | 'assistant'
  content: string
  key?: number
}

type MessageBoxType = TipMessageBoxType | ChatMessageBoxType

const convert = (displayedMessages: DisplayedMessage[]): MessageBoxType[] => {
  return displayedMessages.map((msg) => {
    if (msg.role === 'user') {
      return {
        avatar: 'https://picsum.photos/200/300',
        role: 'user',
        content: msg.content
      }
    } else if (msg.role === 'processor') {
      return {
        role: 'tip',
        content: msg.content
      }
    } else {
      return {
        role: 'assistant',
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
  for (const branch of branches) {
    for (let i = 0; i < branch.steps.length; i++) {
      const step = branch.steps[i]
      if (step.step.toString() === stepId.toString()) {
        if (i < branch.steps.length - 1) {
          return branch.steps[i + 1]
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
  status,
}: {
    chatId: string
  status: 'submitted' | 'streaming' | 'ready' | 'error'
}) {
  const [fetchStatus, setFetchStatus] = useState(status)
  const [isLoading, setIsLoading] = useState(false)
  const messages = useRef<MessageBoxType[]>([])
  const [updateTrigger, setUpdateTrigger] = useState(0)
  const [branches, setBranches] = useState<StepBranch[]>([])
  const currentStep = useRef<string | null | typeof END>(null)
  const [prompt, setPrompt] = useState('')
  const calledRef = useRef(false)
  const [nextAvailablity, setNextAvailablity] = useState(status === 'ready')
  const [boardContent, setBoardContent] = useState('')
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const operations = useRef<Operation[]>([])
  const connection = useConnection(() => {
    connection.chat.get({
      chat_id: chatId,
    }).then((info) => {
      setBranches(info.branches)
      currentStep.current = info.context[info.context.length - 1]?.step ?? null
      messages.current.push(
        ...convert(info.context)
      )
    })
  })
  useClearParamOnLoad('new')

  useEffect(() => {
    const el = messagesContainerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  });

  const requestDesigner = async (inputPrompt: string) => {
    try {
      calledRef.current = true
      setFetchStatus('streaming')
      setIsLoading(true)

      messages.current.push(
        ...(prompt
          ? [{
            avatar: 'https://picsum.photos/200/300',
            role: 'user' as const,
            content: inputPrompt,
          }]
          : []),
        {
          role: 'tip',
          content: 'Designing...',
          isLoading: true,
        }
      )
      setUpdateTrigger(v => v + 1)

      const designerResponse = await connection.chat.designer({
        chat_id: chatId,
        prompt,
        step: currentStep.current as string,
      })

      setBranches(designerResponse.branches)
      if (designerResponse.branches && designerResponse.branches.length > 0 &&
        designerResponse.branches[designerResponse.branches.length - 1].steps &&
        designerResponse.branches[designerResponse.branches.length - 1].steps.length > 0) {
        currentStep.current = designerResponse.branches[designerResponse.branches.length - 1].steps[0].step
      } else {
        currentStep.current = null
      }
      messages.current.length = 0
      messages.current.push(...convert(designerResponse.displayed_messages))
      setUpdateTrigger(v => v + 1)

      let content = ''
      await request(content, designerResponse.branches)
      setNextAvailablity(true)
    } catch (error) {
      console.error('Error in fetchMessages:', error)
      setFetchStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const requestSpeaker = async (
    content: string,
    currentBranches: StepBranch[]
  ) => {
    const step = findStep(currentStep.current as string, currentBranches)!

    // Create a new message object once and reuse it
    const messageIndex = messages.current.length;
    messages.current.push({
      role: 'assistant',
      content: '',
      key: Date.now() // Add a stable key to help React with reconciliation
    });
    setUpdateTrigger(v => v + 1);

    let buffer = '';

    await connection.chat.speaker({
      chat_id: chatId,
      stream: true,
      ...step,
    }, (chunk) => {
      buffer = chunk.content;

      // Update the existing message object instead of creating a new one
      messages.current[messageIndex] = {
        role: 'assistant',
        content: buffer,
        key: messages.current[messageIndex].key
      };
      setUpdateTrigger(v => v + 1);
    });
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

  const requestLayout = async (currentBranches: StepBranch[]) => {
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
    if (calledRef.current) return
    if (fetchStatus === 'submitted') {
      requestDesigner(prompt)
    }
  }, [chatId])

  async function handleNext() {
    setNextAvailablity(false)
    const nextStep = findStepNext(currentStep.current as string, branches)
    if (nextStep === END) {
      // handle end
    } else {
      currentStep.current = nextStep?.step!
      await request('', branches)
      setUpdateTrigger(v => v + 1)
    }
    setNextAvailablity(true)
  }

  function handleSend() {
    requestDesigner(prompt)
    setPrompt('')
  }

  return (
    <div className="flex w-full gap-2 h-full">
      <div className="flex flex-col h-full w-2/3 gap-y-2">
        <div className="flex flex-3/4 h-full bg-gray-100 rounded-lg">
          <Board operations={operations.current.map(op => JSON.stringify(op, null, 2))} />
        </div>
        <div className="flex flex-1/4 h-full bg-gray-100 rounded-lg">
          <Timeline branches={branches} />
        </div>
      </div>
      <div className="flex flex-col w-1/3 gap-y-2 bg-gray-100 rounded-lg p-4">
        <div className="flex flex-1 overflow-y-auto scroll-smooth" ref={messagesContainerRef}>
          <div className="size-full">
            {messages.current.map((message, index) => (
              message.role === 'tip' ? (
                <ToolBox
                  key={index}
                  content={message.content}
                  isLoading={message.isLoading ?? false}
                />
              ) : (
                <MessageBox
                  key={index}
                  avatar={message.avatar ?? 'https://picsum.photos/200/300'}
                  role={message.role}
                  content={message.content}
                />
              )
            ))}
          </div>
        </div>
        <div className="h-[200px] w-full">
          <PromptArea onNext={handleNext} onSend={handleSend} setPrompt={setPrompt} next={nextAvailablity} />
        </div>
      </div>
    </div>
  )
}
