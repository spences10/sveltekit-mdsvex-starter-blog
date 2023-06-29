import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { mdsvex } from 'mdsvex'
import { resolve } from 'path'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  kit: {
    adapter: adapter(),
    alias: {
      $lib: resolve('./src/lib'),
    },
  },

  preprocess: [mdsvex(mdsvexConfig), vitePreprocess()],
}

export default config
