import { Chat } from '@/components/chat'
import { useRouter } from 'next/navigation'

export default async function ChatPage({ params }: { params: { chat_id: string } }) {
  const { chat_id } = params
  const chat = {
    messages: [],
    status: 'submitted' as const,
  }

  return (
    <div className='w-full h-full'>
      <Chat chatId={chat_id} status={chat.status} />
    </div>
  )
}
