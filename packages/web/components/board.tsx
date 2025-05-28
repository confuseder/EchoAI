import ShikiHighlighter from 'react-shiki'
import { Whiteboard } from './chat/whiteboard'
import { Operation } from '@echoai/shared'

const processedOperations: string[] = []

export function Board({ operations, whiteboard, pageId }: { operations: Operation[], whiteboard: Whiteboard, pageId: string }) {
  for (const operation of operations) {
    if (processedOperations.includes(operation.id)) {
      continue
    }
    processedOperations.push(operation.id)
    switch (operation.type) {
      case 'add-node':
        whiteboard.addNode(pageId, operation.position, operation.content)
        break
      case 'remove-node':
        whiteboard.removeNode(pageId, operation.position)
        break
      case 'set-prop':
        whiteboard.setProp(pageId, operation.position, operation.attr, operation.value)
        break
      case 'set-content':
        whiteboard.setContent(pageId, operation.position, operation.content)
        break
      case 'remove-prop':
        whiteboard.removeProp(pageId, operation.position, operation.attr)
        break
      default:
        console.error('Unknown operation:', operation)
    }
  }

  return (
    <div className='flex size-full'>
      <ShikiHighlighter
        language="html"
        theme="github-dark"
        style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', width: '100%' }}
      >
        {whiteboard.processToDocumentString(pageId)}
      </ShikiHighlighter>
    </div>
  )
}