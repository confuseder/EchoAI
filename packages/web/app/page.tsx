import PromptArea from '@/components/prompt-area'

function getPeriod(): 'morning' | 'afternoon' | 'evening' {
  const now = new Date()
  const hours = now.getHours()
  if (hours < 12) return 'morning'
  if (hours < 18) return 'afternoon'
  return 'evening'
}

export default function Home() {
  // const [prompt, setPrompt] = useState()
  let disabled = false
  // async function start() {
  //   if (!prompt || disabled) return
  //   disabled = true
  // }

  return (
    <div className="flex flex-col w-full h-full pt-48">
      <div className="text-4xl flex self-center font-blod">
        Good {getPeriod()}, let's get started!
      </div>
      <div className="w-full h-72 px-56 py-10">
        <div className="w-full h-full mx-auto max-w-[900px]">
          <PromptArea primaryPage={true} />
        </div>
      </div>
    </div>
  )
}
