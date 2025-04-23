import { defineConfig } from "tsup";

export default defineConfig({
  entry: ['./src/index.test.ts'],
  outDir: './dist',
  format: 'esm',
  splitting: false,
  noExternal: ['@echoai/utils'],
  platform: 'node',
  target: 'node20'
})
