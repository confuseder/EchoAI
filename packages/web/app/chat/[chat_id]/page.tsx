import { Chat } from '@/components/chat'

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

  return (
    <div className='w-full h-full'>
      <Chat chatId={chat_id} status={chat.status} />
    </div>
  )
}
