import ShikiHighlighter from 'react-shiki'
import { Whiteboard } from './chat/whiteboard'
import { Operation } from '@echoai/shared'
import { useState, useEffect, RefObject, useRef } from 'react'

export function Board({ operations, whiteboard, pageId }: { operations: RefObject<Operation[]>, whiteboard: Whiteboard, pageId: string }) {
  const [documentString, setDocumentString] = useState('')
  const [lastProcessedIndex, setLastProcessedIndex] = useState(-1)
  const whiteboardRef = useRef<Whiteboard>(whiteboard)

  useEffect(() => {
    if (!operations.current) return

    const processNewOperations = () => {
      // 只处理新的操作
      const newOperations = operations.current.slice(lastProcessedIndex + 1)

      for (const operation of newOperations) {
        switch (operation.type) {
          case 'add-node':
            whiteboardRef.current.addNode(pageId, operation.position, operation.content)
            break
          case 'remove-node':
            whiteboardRef.current.removeNode(pageId, operation.position)
            break
          case 'set-prop':
            whiteboardRef.current.setProp(pageId, operation.position, operation.attr, operation.value)
            break
          case 'set-content':
            whiteboardRef.current.setContent(pageId, operation.position, operation.content)
            break
          case 'remove-prop':
            whiteboardRef.current.removeProp(pageId, operation.position, operation.attr)
            break
          default:
            console.error('Unknown operation:', operation)
        }
      }

      // 更新最后处理的索引
      setLastProcessedIndex(operations.current.length - 1)
      // 更新文档字符串
      setDocumentString(whiteboardRef.current.processToDocumentString(pageId))
    }

    processNewOperations()
  }, [operations.current?.length, pageId])

  return (
    <div className='flex size-full'>
      <ShikiHighlighter
        language="html"
        theme="github-dark"
        style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', width: '100%' }}
      >
        {documentString}
      </ShikiHighlighter>
    </div>
  )
}