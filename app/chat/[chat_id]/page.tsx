import { Chat } from '@/components/chat'

async function getChatData(chatId: string) {
  return Promise.resolve({
    messages: [
      {
        content: 'Hello, please teach me ....',
        role: 'user' as const,
        avatar: 'https://picsum.photos/200/300',
      },
    ],
    chatId,
  })
}

export default async function ChatPage(props: {
  params: Promise<{ id: string }>
}) {
  const params = await props.params
  const { id } = params
  const chat = await getChatData(id)

  return <Chat chatId={id} initialMessages={chat.messages} />
}
