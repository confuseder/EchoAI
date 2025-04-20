import { Chat } from '@/components/chat'
import connection from '@/lib/connection'

export default async function ChatPage({ params }: { params: { chat_id: string } }) {
  const { chat_id } = params
  const chat = {
    messages: [],
    status: 'submitted' as const,
  }
  const chatInfo = await connection.chat.get({
    chat_id,
  })

  return (
    <div className='w-full h-full'>
      <Chat chatId={chat_id} status={chat.status} info={chatInfo} />
    </div>
  )
}
