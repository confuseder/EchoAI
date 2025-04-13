import { Chat } from '@/components/chat'

export default async function ChatPage(props: {
  params: Promise<{ id: string }>
}) {
  const params = await props.params
  const { id } = params
  const chat = {
    messages: [],
    status: 'submitted' as const,
  }

  return (
    <div className='w-full h-full'>
      <Chat chatId={id} status={chat.status} />
    </div>
  )
}
