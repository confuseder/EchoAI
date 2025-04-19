const BASE_URL = process.env.OPENAI_BASE_URL!
const API_KEY = process.env.OPENAI_API_KEY!

import { OpenAI } from "openai";

export function openai() {
  return new OpenAI({
    baseURL: BASE_URL,
    apiKey: API_KEY,
  })
}