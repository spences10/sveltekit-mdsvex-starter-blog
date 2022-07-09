import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'path'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  // https://vitejs.dev/config/#server-fs-allow
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      // posts, copy
      allow: ['..'],
    },
  },
  resolve: {
    alias: {
      '@components': resolve('./src/lib/components'),
      '@lib': resolve('./src/lib'),
      '@icons': resolve('./src/lib/icons'),
    },
  },
}

export default config
