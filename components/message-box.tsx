export default function MessageBox(
  props: {
    avatar: string,
    role: 'user' | 'assistant',
    content: string,
  }
) {
  return (
    <div className={`flex w-full p-2 gap-2 text-sm ${props.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`flex w-8 h-8`}>
        <img className="w-full h-full rounded-full" src={props.avatar} />
      </div>
      <div className="flex w-full h-full">
        <div className="w-full h-full bg-[rgba(255,255,255,0.5)] rounded-lg p-2">
          {props.content}
        </div>
      </div>
    </div>
  )
}