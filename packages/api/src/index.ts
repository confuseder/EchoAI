import createChat, { type CreateChatRequestBody, type CreateChatResponse } from "./create"
import getChat, { type GetChatRequestBody, type GetChatResponse } from "./get-chat"
import fetchDesigner, { type DesignerRequestBody, type DesignerResponse } from "./designer"
import fetchSpeaker, { type SpeakerRequestBody, type SpeakerResponse } from "./speaker"
import fetchLayout, { type LayoutRequestBody, type LayoutResponse } from "./layout"
import fetchHistory, { type HistoryResponse } from "./history"
import fetchChalk, { ChalkResponse } from "./chalk"
import { ChalkRequestBody } from "./chalk"
export interface ConnectionParams {
  token: string
}

export function createConnection(params: ConnectionParams) {
  const chat = {
    async create(body: CreateChatRequestBody): Promise<CreateChatResponse> {
      return await createChat(body, params.token)
    },
    async get(body: GetChatRequestBody): Promise<GetChatResponse> {
      return await getChat(body, params.token)
    },
    async designer(body: DesignerRequestBody): Promise<DesignerResponse> {
      return await fetchDesigner(body, params.token)
    },
    async speaker(body: SpeakerRequestBody, callback: (chunk: SpeakerResponse) => void = () => {}): Promise<SpeakerResponse> {
      return await fetchSpeaker(body, callback, params.token) as SpeakerResponse
    },
    async layout(body: LayoutRequestBody): Promise<LayoutResponse> {
      return await fetchLayout(body, params.token)
    },
    async history(): Promise<HistoryResponse> {
      return await fetchHistory(params.token)
    },
    async chalk(body: ChalkRequestBody, callback: (chunk: ChalkResponse) => void = () => {}): Promise<ChalkResponse> {
      return await fetchChalk(body, callback, params.token) as ChalkResponse
    }
  }

  return {
    chat,
  }
}

export * from './create'
export * from './get-chat'
