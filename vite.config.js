// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   base: '/portfolio/', 
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGhPages = process.env.DEPLOY_TARGET === 'GH_PAGES'  // set this when you build for GH Pages
const base = isGhPages ? '/portfolio/' : '/'

export default defineConfig({
  base,
  plugins: [react()],
})