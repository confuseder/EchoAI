import createChat, { type CreateChatRequestBody, type CreateChatResponse } from "./chat/create"
import getChat, { type GetChatRequestBody, type GetChatResponse } from "./chat/get-chat"
import fetchDesigner, { type DesignerRequestBody, type DesignerResponse } from "./chat/designer"
import fetchSpeaker, { type SpeakerRequestBody, type SpeakerResponse } from "./chat/speaker"
import fetchLayout, { type LayoutRequestBody, type LayoutResponse } from "./chat/layout"
import fetchHistory, { type HistoryResponse } from "./chat/history"
import fetchChalk, { ChalkResponse } from "./chat/chalk"
import { ChalkRequestBody } from "./chat/chalk"
import LogtoClient from "@logto/browser"
import handleSignIn from "./auth/signin"
import handleSignOut from "./auth/signout"
import getStatus from "./auth/status"
import createOperator from "./auth/operator"
import handleSignInCallback from "./auth/callback"
import { LOGTO_ENDPOINT, LOGTO_APP_ID } from "./env"
import { UserScope } from "@logto/browser"

export interface ConnectionParams {
  token: string
}

export const logto = new LogtoClient({
  endpoint: LOGTO_ENDPOINT,
  appId: LOGTO_APP_ID,
  scopes: [UserScope.Identities, UserScope.Profile]
})

export function createConnection(params: ConnectionParams = {
  token: ''
}) {
  // params.token = await logto.getAccessToken()
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

  const auth = {
    async signIn(redirectUri: string) {
      return await handleSignIn(logto, redirectUri)
    },
    async signOut() {
      return await handleSignOut(logto)
    },
    async status(): Promise<boolean> {
      return await getStatus(logto)
    },
    async operator() {
      return await createOperator(logto)
    },
    async callback(callbackUri: string) {
      return await handleSignInCallback(logto, callbackUri)
    }
  }

  return {
    chat,
    auth,
    setToken(token: string) {
      params.token = token
    }
  }
}

export * from './chat/create'
export * from './chat/get-chat'
export * from './chat/chalk'
