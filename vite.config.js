/// <reference types="vitest" />
import {defineConfig} from 'vite'
import {visualizer} from 'rollup-plugin-visualizer'
import qiankun from 'vite-plugin-qiankun'

const port = process.env.PORT || 8080

export default defineConfig(({mode}) => ({
  plugins: [
    qiankun('orchy-vanilla-template', {useDevMode: true}),
    visualizer(),
  ],
  base: mode === 'development' ? `http://localhost:${port}/` : '/orchy-vanilla-template/',
  server: {port, cors: true},
  test: {
    environment: 'happy-dom',
    mockReset: true
  }
}))
