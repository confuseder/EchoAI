// export * from './create'
// export * from './designer'

import createChat, { type CreateChatRequestBody, type CreateChatResponse } from "./create"
import getChat, { type GetChatRequestBody, type GetChatResponse } from "./get-chat"
import fetchDesigner, { type DesignerRequestBody, type DesignerResponse } from "./designer"
import fetchSpeaker, { type SpeakerRequestBody, type SpeakerResponse } from "./speaker"
import fetchLayout, { type LayoutRequestBody, type LayoutResponse } from "./layout"

export interface ConnectionParams {
  token: string
}

export function createConnection(params: ConnectionParams) {
  const chat = {
    create(body: CreateChatRequestBody): Promise<CreateChatResponse> {
      return createChat(body, params.token)
    },
    get(body: GetChatRequestBody): Promise<GetChatResponse> {
      return getChat(body, params.token)
    },
    designer(body: DesignerRequestBody): Promise<DesignerResponse> {
      return fetchDesigner(body, params.token)
    },
    speaker(body: SpeakerRequestBody, callback: (chunk: SpeakerResponse) => void = () => {}): Promise<SpeakerResponse> {
      return fetchSpeaker(body, callback, params.token) as Promise<SpeakerResponse>
    },
    layout(body: LayoutRequestBody): Promise<LayoutResponse> {
      return fetchLayout(body, params.token)
    },
  }

  return {
    chat,
  }
}

export * from './create'
export * from './get-chat'
