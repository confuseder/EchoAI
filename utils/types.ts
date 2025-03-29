export interface BaseRequestBody {
  service: string
}

export interface Usage {
  prompt: number
  answer: number
  total: number
}

export interface Message {
  role: 'user' | 'assistant' | 'system' | 'tool'
  content: string
}

export interface RealMessage {
  answer: string,
  credit: number,
  chat_id?: string,
}

export interface Contexts {
  real_context: RealMessage[]
  context: Message[]
  chat_id?: string
}
