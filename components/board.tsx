import { getHighlighter, Highlighter } from "shikiji"

export function Board({ content }: { content: string }) {
  let highlighter: Highlighter | undefined
  getHighlighter().then(h => {
    highlighter = h
    highlighter.loadLanguage('markdown')
  })

  return (
    <div>
      <div className="size-full flex" dangerouslySetInnerHTML={{ __html: highlighter ? highlighter.codeToHtml(content, { lang: 'markdown', theme: 'github-dark' }) : '' }}></div>
    </div>
  )
}