import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  base: '/jira-email-template/',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: true
    }
  }
})
