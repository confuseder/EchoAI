const BASE_URL = process.env.QWEN_BASE_URL!
const API_KEY = process.env.QWEN_API_KEY!

import { OpenAI } from "openai";

export function qwen() {
  return new OpenAI({
    baseURL: BASE_URL,
    apiKey: API_KEY,
  })
}