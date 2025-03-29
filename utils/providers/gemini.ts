const BASE_URL = process.env.GEMINI_BASE_URL!
const API_KEY = process.env.GEMINI_API_KEY!

import { OpenAI } from "openai";

export function gemini() {
  return new OpenAI({
    baseURL: BASE_URL,
    apiKey: API_KEY,
  })
}