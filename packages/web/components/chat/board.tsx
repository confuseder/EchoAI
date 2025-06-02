import ShikiHighlighter from 'react-shiki'
import { Whiteboard } from './whiteboard'
import { Operation } from '@echoai/shared'
import { useState, useEffect, RefObject, useRef } from 'react'
import { parse, render, renderRoots } from 'sciux-laplace'
import PageSwitcher from './page-switcher'

export function Board({ operations, whiteboard, pageId, onSwitch }: { operations: RefObject<Operation[]>, whiteboard: Whiteboard, pageId: string, onSwitch?: (operation: "next" | "previous") => void }) {
  const [documentString, setDocumentString] = useState('')
  const [lastProcessedIndex, setLastProcessedIndex] = useState(-1)
  const whiteboardRef = useRef<Whiteboard>(whiteboard)
  const boardRef = useRef<HTMLDivElement>(null)

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
      // 更新board
      if (boardRef.current) {
        const ast = whiteboardRef.current.findPage(pageId)?.document
        console.log(ast)
        if (ast) {
          const roots = renderRoots(ast.children)
          boardRef.current.append(...roots)
        }
      }
    }

    processNewOperations()
  }, [operations.current?.length, pageId])

  return (
    // <div className='flex size-full'>
    //   <ShikiHighlighter
    //     language="html"
    //     theme="github-dark"
    //     style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', width: '100%' }}
    //   >
    //     {documentString}
    //   </ShikiHighlighter>
    // </div>
    <div className='flex relative size-full'>
      <div className='flex size-full' ref={boardRef}></div>
      <div className='absolute bottom-0 right-0 m-4'>
        <PageSwitcher pageId={pageId} total={whiteboardRef.current.getPageCount().toString()} />
      </div>
    </div>
  )
}