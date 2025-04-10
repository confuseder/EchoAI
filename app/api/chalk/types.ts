export type Position = number[]; // A array composed of node index relative to the target node, for example, [0,1] means the second node in the root node.
export type Result = {
  status: "success" | "error";
  message?: string;
  document?: string;
};
export type AddNodeOperation = {
  type: "add-node";
  target: Position;
  content: string; // sciux code content
};

export type SetPropOperation = {
  type: "set-prop";
  target: Position;
  prop: string; // should be with prefixs when needed, for example, `@click`, `#animate`, `:x`
  value: string;
};
export type SetContentOperation = {
  type: "set-content"; // The content under target node will be replaced by the new content.
  target: Position;
  content: string; // sciux code content
};
export type RemovePropOperation = {
  type: "remove-prop";
  target: Position;
  prop: string; // should be with prefixs when needed, for example, `@click`, `#animate`, `:x`
};
export type RemoveNodeOperation = {
  type: "remove-node";
  target: Position; // The target node is the node to be removed.
};
export type RemoveAllChildrenOperation = {
  type: "remove-all-children";
  target: Position; // The target node is the node to be removed.
};
export type Operation =
  | AddNodeOperation
  | SetPropOperation
  | SetContentOperation
  | RemovePropOperation
  | RemoveNodeOperation
  | RemoveAllChildrenOperation;