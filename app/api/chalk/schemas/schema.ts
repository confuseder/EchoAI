export default {
  name: "update",
  parameters: {
    "type": "object",
    "properties": {
      "operations": {
        "type": "array",
        "items": {
          "oneOf": [
            {
              "type": "object",
              "properties": {
                "type": { "const": "add-node" },
                "target": {
                  "type": "array",
                  "items": {
                    "type": "number",
                    "description":
                      "A array composed of node index relative to the target node, for example, [0,1] means the second node ",
                  },
                },
                "content": { "type": "string" },
              },
              "required": ["type", "target", "content"],
              "description": "Add a new node to the sciux document.",
            },
            {
              "type": "object",
              "properties": {
                "type": { "const": "set-prop" },
                "target": {
                  "type": "array",
                  "items": {
                    "type": "number",
                    "description":
                      "A array composed of node index relative to the target node, for example, [0,1] means the second node ",
                  },
                },
                "prop": { "type": "string" },
                "value": { "type": "string" },
              },
              "required": ["type", "target", "prop", "value"],
              "description":
                "Set the property of the node, should be with prefixs when needed, for example, `@click`, `#animate`, `:x`",
            },
            {
              "type": "object",
              "properties": {
                "type": { "const": "set-content" },
                "target": {
                  "type": "array",
                  "items": {
                    "type": "number",
                    "description":
                      "A array composed of node index relative to the target node, for example, [0,1] means the second node ",
                  },
                },
                "content": { "type": "string" },
              },
              "required": ["type", "target", "content"],
              "description":
                "Set the content of the node, the content will be replaced by the new content.",
            },
            {
              "type": "object",
              "properties": {
                "type": { "const": "remove-prop" },
                "target": {
                  "type": "array",
                  "items": {
                    "type": "number",
                    "description":
                      "A array composed of node index relative to the target node, for example, [0,1] means the second node ",
                  },
                },
                "prop": { "type": "string" },
              },
              "required": ["type", "target", "prop"],
              "description":
                "Remove the property of the node, should be with prefixs when needed, for example, `@click`, `#animate`, `:x`",
            },
            {
              "type": "object",
              "properties": {
                "type": { "const": "remove-node" },
                "target": {
                  "type": "array",
                  "items": {
                    "type": "number",
                    "description":
                      "A array composed of node index relative to the target node, for example, [0,1] means the second node ",
                  },
                },
              },
              "required": ["type", "target"],
              "description": "Remove the target node.",
            },
            {
              "type": "object",
              "properties": {
                "type": { "const": "remove-all-children" },
                "target": {
                  "type": "array",
                  "items": {
                    "type": "number",
                    "description":
                      "A array composed of node index relative to the target node, for example, [0,1] means the second node ",
                  },
                },
              },
              "required": ["type", "target"],
              "description": "Remove all the children of the target node.",
            },
          ],
        },
      },
    },
    "required": ["operations"],
  },
  "description": "Update the content of the sciux document.",
};
