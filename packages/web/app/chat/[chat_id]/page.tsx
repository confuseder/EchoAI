import { Chat } from '@/components/chat'
import { useClearParamOnLoad } from '@/hooks/use-clear-params-onload'
import useServerConnection from '@/lib/server-connection'

export default async function ChatPage({
  params,
  searchParams,
}: {
  params: { chat_id: string }
  searchParams: { new: string }
}) {
  const { chat_id } = params
  const { new: newParam } = searchParams
  
  const chat = {
    messages: [],
    status: newParam === 'yes' ? 'submitted' as const : 'ready' as const,
  }
  const connection = useServerConnection()
  const chatInfo = await connection.chat.get({
    chat_id,
  })

  return (
    <div className='w-full h-full'>
      <Chat chatId={chat_id} status={chat.status} info={chatInfo} />
    </div>
  )
}
