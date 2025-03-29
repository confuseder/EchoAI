const BASE_URL = process.env.ANTHROPIC_BASE_URL!
const API_KEY = process.env.ANTHROPIC_API_KEY!

import { OpenAI } from "openai";

export function anthropic() {
  return new OpenAI({
    baseURL: BASE_URL,
    apiKey: API_KEY,
  })
}