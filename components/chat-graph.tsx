'use client'

import { useEffect, useRef, useState } from 'react'
import { DesignerStep } from '@/app/types/designer'

interface Point {
  x: number
  y: number
}

interface StepNode {
  id: number
  x: number
  y: number
  width: number
  height: number
  radius: number
  step: DesignerStep
  isMain: boolean
}

export function ChatGraph({
  steps,
  onStepClick,
}: {
  steps: DesignerStep[]
  onStepClick?: (step: DesignerStep) => void
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [nodes, setNodes] = useState<StepNode[]>([])
  const [hoveredNode, setHoveredNode] = useState<number | null>(null)
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  // Calculate nodes positions
  useEffect(() => {
    if (!steps.length) return

    const newNodes: StepNode[] = []
    const baseY = 100
    const mainNodeRadius = 16
    const childNodeRadius = 12
    const mainNodeSpacing = 180
    const childSpacing = 50

    // Add main nodes
    steps.forEach((step, index) => {
      newNodes.push({
        id: step.id,
        x: 50 + index * mainNodeSpacing,
        y: baseY,
        width: 180,
        height: 140,
        radius: mainNodeRadius,
        step,
        isMain: true,
      })

      // Add child nodes if any
      if (step.children && step.children.length) {
        const childrenCount = step.children.length
        const totalChildWidth = childrenCount * childSpacing
        const startX =
          50 + index * mainNodeSpacing - totalChildWidth / 2 + childSpacing / 2

        step.children.forEach((child, childIndex) => {
          newNodes.push({
            id: child.id,
            x: startX + childIndex * childSpacing,
            y: baseY + 80,
            width: 100,
            height: 60,
            radius: childNodeRadius,
            step: child,
            isMain: false,
          })
        })
      }
    })

    setNodes(newNodes)
  }, [steps])

  // Draw on canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !nodes.length) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Adjust canvas size
    const resizeCanvas = () => {
      if (containerRef.current && canvas) {
        const { width, height } = containerRef.current.getBoundingClientRect()

        // Ensure minimum size to accommodate all nodes
        const rightmostNode = Math.max(...nodes.map((n) => n.x + n.width / 2))
        const bottommostNode = Math.max(...nodes.map((n) => n.y + n.height / 2))

        // Set canvas size to at least fit all nodes or container size, whichever is larger
        canvas.width = Math.max(width, rightmostNode + 100)
        canvas.height = Math.max(height, bottommostNode + 100)

        drawGraph()
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    function drawGraph() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()

      // Apply transformations
      ctx.translate(offset.x, offset.y)
      ctx.scale(scale, scale)

      // Draw main timeline
      ctx.beginPath()
      if (nodes.filter((n) => n.isMain).length > 1) {
        const mainNodes = nodes.filter((n) => n.isMain)
        ctx.moveTo(mainNodes[0].x, mainNodes[0].y)
        for (let i = 1; i < mainNodes.length; i++) {
          ctx.lineTo(mainNodes[i].x, mainNodes[i].y)
        }
      }
      ctx.strokeStyle = '#D1D5DB' // gray-300
      ctx.lineWidth = 4
      ctx.stroke()

      // Draw connections to child nodes
      ctx.beginPath()
      const mainNodeIds = new Set(
        nodes.filter((n) => n.isMain).map((n) => n.step.id),
      )
      const childNodes = nodes.filter((n) => !n.isMain)

      childNodes.forEach((childNode) => {
        // Find parent node
        const parentId = steps.findIndex((s) =>
          s.children?.some((c) => c.id === childNode.step.id),
        )

        if (parentId !== -1) {
          const parentNode = nodes.find(
            (n) => n.step.id === steps[parentId].id && n.isMain,
          )
          if (parentNode) {
            ctx.moveTo(parentNode.x, parentNode.y)
            ctx.lineTo(childNode.x, childNode.y)
          }
        }
      })

      ctx.strokeStyle = '#D1D5DB' // gray-300
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)

        if (node.id === hoveredNode) {
          ctx.fillStyle = '#6B7280' // gray-500
          ctx.strokeStyle = '#1F2937' // gray-800
        } else if (node.isMain && node.step.step === 1) {
          ctx.fillStyle = '#1F2937' // gray-800
          ctx.strokeStyle = '#1F2937' // gray-800
        } else {
          ctx.fillStyle = '#FFFFFF' // white
          ctx.strokeStyle = '#9CA3AF' // gray-400
        }

        ctx.fill()
        ctx.lineWidth = 2
        ctx.stroke()

        // Draw step text
        if (node.isMain) {
          ctx.fillStyle = '#111827' // gray-900
          ctx.font = 'bold 14px sans-serif'
          ctx.textAlign = 'center'
          ctx.fillText(
            `${node.step.step}: ${node.step.title}`,
            node.x,
            node.y - 40,
          )

          ctx.fillStyle = '#4B5563' // gray-600
          ctx.font = '12px sans-serif'
          ctx.fillText(node.step.description, node.x, node.y + 40, 150)
        } else {
          ctx.fillStyle = '#4B5563' // gray-600
          ctx.font = '11px sans-serif'
          ctx.textAlign = 'center'
          ctx.fillText(node.step.description, node.x, node.y + 25, 80)
        }
      })

      ctx.restore()
    }

    drawGraph()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [nodes, hoveredNode, scale, offset, steps])

  // Handle mouse interactions
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const mouseX = (e.clientX - rect.left - offset.x) / scale
    const mouseY = (e.clientY - rect.top - offset.y) / scale

    // Check if hovering over any node
    let hovered = null
    for (const node of nodes) {
      const distance = Math.sqrt(
        Math.pow(mouseX - node.x, 2) + Math.pow(mouseY - node.y, 2),
      )
      if (distance <= node.radius) {
        hovered = node.id
        break
      }
    }
    setHoveredNode(hovered)

    // Handle dragging
    if (isDragging) {
      const newOffsetX = offset.x + (e.clientX - dragStart.x)
      const newOffsetY = offset.y + (e.clientY - dragStart.y)

      setOffset({
        x: newOffsetX,
        y: newOffsetY,
      })

      setDragStart({ x: e.clientX, y: e.clientY })

      // Scroll the container if needed
      if (containerRef.current) {
        const container = containerRef.current.querySelector('div')
        if (container) {
          if (e.clientX > rect.right - 50) container.scrollLeft += 10
          if (e.clientX < rect.left + 50) container.scrollLeft -= 10
          if (e.clientY > rect.bottom - 50) container.scrollTop += 10
          if (e.clientY < rect.top + 50) container.scrollTop -= 10
        }
      }
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const mouseX = (e.clientX - rect.left - offset.x) / scale
    const mouseY = (e.clientY - rect.top - offset.y) / scale

    // Check if clicking on any node
    for (const node of nodes) {
      const distance = Math.sqrt(
        Math.pow(mouseX - node.x, 2) + Math.pow(mouseY - node.y, 2),
      )
      if (distance <= node.radius) {
        if (onStepClick) onStepClick(node.step)
        return
      }
    }

    // Start dragging
    setIsDragging(true)
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div ref={containerRef} className="bg-gray-100 rounded-xl size-full p-4">
      <div className="size-full overflow-hidden">
        <canvas
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          style={{
            cursor:
              hoveredNode !== null
                ? 'pointer'
                : isDragging
                ? 'grabbing'
                : 'grab',
            display: 'block',
          }}
        />
      </div>
    </div>
  )
}
