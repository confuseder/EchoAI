import { Tool } from "openai/resources/responses/responses.mjs";

export const addPage: Tool = {
  type: 'function',
  name: 'add-page',
  description: 'Add a new page with a primary document and switch to it.',
  parameters: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        description: 'The title or main topic of the page',
      },
    },
    required: ['title'],
  },
  strict: true,
}

export const switchPage: Tool = {
  type: 'function',
  name: 'switch-page',
  description: 'Switch to a page with page id.',
  parameters: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The id of the page to switch to',
      },
    },
    required: ['id'],
  },
  strict: true,
}