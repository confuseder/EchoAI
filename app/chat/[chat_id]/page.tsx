import fetchGetChat from '@/apis/get-chat'
import { Chat } from '@/components/chat'

export default async function ChatPage({ params }: { params: { chat_id: string } }) {
  const { chat_id } = params
  const chat = {
    messages: [],
    status: 'submitted' as const,
  }
  const chatInfo = await fetchGetChat({
    chat_id,
  })

  return (
    <div className='w-full h-full'>
      <Chat chatId={chat_id} status={chat.status} info={chatInfo} />
    </div>
  )
}
