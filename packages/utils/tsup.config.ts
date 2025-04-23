import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: 'esm',
  dts: true,
  platform: 'node',
  target: 'node20',
  noExternal: ['dotenv']
})