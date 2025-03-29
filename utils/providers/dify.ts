const DIFY_URL = process.env.DIFY_URL!
const DIFY_DATASET_ID = process.env.DIFY_DATASET_ID!
const DIFY_DATASET_API_KEY = process.env.DIFY_DATASET_V1_API_KEY!

export async function search(query: string) {
  const response = await fetch(`${DIFY_URL}/v1/datasets/${DIFY_DATASET_ID}/retrieve`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${DIFY_DATASET_API_KEY}`
    },
    body: JSON.stringify({
      query,
    })
  })
  const data = await response.json()
  // deno-lint-ignore no-explicit-any
  return data.records.map((record: any) => record.segment.content) as string[]
}
