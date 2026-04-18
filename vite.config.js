import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGhPages = process.env.DEPLOY_TARGET === 'GH_PAGES'
const base = isGhPages ? '/portfolio/' : '/'

export default defineConfig({
  base,
  plugins: [react()],
})
