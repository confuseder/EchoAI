import { DocumentNode, ElementNode, NodeType, parse, querySelectorXPath } from 'sciux-laplace'

export type WhiteboardPage = {
  id: string
  title: string
  document: DocumentNode
}

export class Whiteboard {
  pages: WhiteboardPage[] = []
  primaryPageTemp: DocumentNode = parse('<root></root>')

  constructor() { }

  private findPage(id: string) {
    return this.pages.find(page => page.id === id)
  }

  addPage(title: string) {
    const page: WhiteboardPage = {
      id: (this.pages.length + 1).toString(),
      title,
      document: this.primaryPageTemp
    }
    this.pages.push(page)
    return page
  }

  removePage(id: string) {
    this.pages = this.pages.filter(page => page.id !== id)
  }
  
  // Operations
  addNode(
    pageId: string,
    position: string, // XPath
    content: string
  ) {
    const page = this.findPage(pageId)!
    const node = querySelectorXPath(page.document, position)!
    const children = parse(content).children
    if (node.type === NodeType.ELEMENT || node.type === NodeType.FRAGMENT || node.type === NodeType.DOCUMENT) {
      node.children.push(...children)
    }

    return this
  }

  removeNode(
    pageId: string,
    position: string // XPath
  ) {
    const page = this.findPage(pageId)!
    const node = querySelectorXPath(page.document, position)!
    node.parent?.children.splice(node.parent.children.indexOf(node), 1)

    return this
  }
  
  setProp(
    pageId: string,
    position: string, // XPath
    prop: string,
    value: string
  ) { 
    const page = this.findPage(pageId)!
    const node = querySelectorXPath(page.document, position)!
    if (node.type === NodeType.ELEMENT) {
      for (const attr of node.attributes) {
        if (attr.name === prop) {
          attr.value = value
          return this
        }
      }
      node.attributes.push({ name: prop, value, type: NodeType.ATTRIBUTE, raw: `${prop}="${value}"` })
    }

    return this
  }

  removeProp(
    pageId: string,
    position: string, // XPath
    prop: string
  ) {
    const page = this.findPage(pageId)!
    const node = querySelectorXPath(page.document, position)!
    if (node.type === NodeType.ELEMENT) {
      node.attributes = node.attributes.filter(attr => attr.name !== prop)
    }
    return this
  }

  setContent(
    pageId: string,
    position: string, // XPath
    content: string
  ) {
    const page = this.findPage(pageId)!
    const node = querySelectorXPath(page.document, position)!
    if (node.type === NodeType.ELEMENT || node.type === NodeType.FRAGMENT || node.type === NodeType.DOCUMENT) {
      node.children = parse(content).children
    }
    return this
  }
  
  // Process
  processToDocumentString(pageId: string): string {
    const page = this.findPage(pageId)!

    return ''
  }

  processToSummarizedDocumentString(pageId: string): string {
    const page = this.findPage(pageId)!

    return ''
  }
}
