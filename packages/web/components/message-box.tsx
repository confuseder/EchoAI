import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import ShikiHighlighter from 'react-shiki'

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
          <Markdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              code(props) {
                const { children, className, node, ...rest } = props
                const match = /language-(\w+)/.exec(className || '')
                return match ? (
                  <ShikiHighlighter
                    language={match[1]}
                    theme="github-dark"
                    style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
                  >
                    {String(children)}
                  </ShikiHighlighter>
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                )
              }
            }}
          >{props.content}</Markdown>
        </div>
      </div>
    </div>
  )
}