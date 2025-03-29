const BASE_URL = process.env.DEEPSEEK_BASE_URL!
const API_KEY = process.env.DEEPSEEK_API_KEY!

import { OpenAI } from "openai";

export function deepseek() {
  return new OpenAI({
    baseURL: BASE_URL,
    apiKey: API_KEY,
  })
}