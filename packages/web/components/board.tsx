import ShikiHighlighter from 'react-shiki'
import { Whiteboard } from './chat/whiteboard'
import { Operation } from '@echoai/shared'

export function Board({ operations, whiteboard, pageId }: { operations: any[], whiteboard: Whiteboard, pageId: string }) {
  for (const operation of operations) {
    switch (operation.type) {
      case 'add-node':
        whiteboard.addNode(pageId, operation.props.position, operation.content)
        break
      case 'remove-node':
        whiteboard.removeNode(pageId, operation.props.position)
        break
      case 'set-prop':
        whiteboard.setProp(pageId, operation.props.position, operation.props.attr, operation.props.value)
        break
      case 'set-content':
        whiteboard.setContent(pageId, operation.props.position, operation.content)
        break
      case 'remove-prop':
        whiteboard.removeProp(pageId, operation.props.position, operation.props.attr)
        break
      default:
        console.error('Unknown operation:', operation)
    }
  }

  return (
    <div className='grid grid-cols-3 gap-2'>
      <ShikiHighlighter
        language="json"
        theme="github-dark"
        style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
      >
        {whiteboard.processToDocumentString(pageId)}
      </ShikiHighlighter>
    </div>
  )
}