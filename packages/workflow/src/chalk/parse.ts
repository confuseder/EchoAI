export interface OperationNode {
  type: string;
  props: Record<string, string>;
  content?: string;
}

export function parse(text: string): OperationNode[] {
  const result: OperationNode[] = [];

  // First handle start-end pairs
  const startEndPattern = /{start:([^}\s]+)([^}]*)}(.*?){end:\1}/gs;
  let startEndMatch;

  while ((startEndMatch = startEndPattern.exec(text)) !== null) {
    const [fullMatch, type, propsStr, content] = startEndMatch;
    result.push({
      type,
      props: parseProps(propsStr),
      content: content.trim()
    });
  }

  // Then handle single tags, excluding any start: or end: tags
  const singlePattern = /{(?!start:)(?!end:)([^}\s]+)([^}]*)}/g;
  let singleMatch;

  while ((singleMatch = singlePattern.exec(text)) !== null) {
    const [fullMatch, type, propsStr] = singleMatch;
    // Skip if this tag is within a start/end pair
    const matchStart = text.indexOf(fullMatch);
    const isPartOfPair = result.some(node => {
      const nodeStart = text.indexOf(`{start:${node.type}`);
      const nodeEnd = text.indexOf(`{end:${node.type}`);
      return matchStart > nodeStart && matchStart < nodeEnd;
    });

    if (!isPartOfPair) {
      result.push({
        type,
        props: parseProps(propsStr)
      });
    }
  }

  return result;
}

function parseProps(propsString: string): Record<string, string> {
  const props: Record<string, string> = {};
  const pattern = /(\w+)="([^"]*)"/g;

  let match;
  while ((match = pattern.exec(propsString)) !== null) {
    const [, key, value] = match;
    props[key] = value;
  }

  return props;
}
