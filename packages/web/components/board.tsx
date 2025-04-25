import ShikiHighlighter from 'react-shiki'

export function Board({ operations }: { operations: string[] }) {
  return (
    <div className='grid grid-cols-4 gap-2'>
      {operations.map((operation, index) => (
        <div key={index}>
          <ShikiHighlighter language="json" theme="github-dark">
            {operation}
          </ShikiHighlighter>
        </div>
      ))}
    </div>
  )
}