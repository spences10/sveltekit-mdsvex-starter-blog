---
date: 2021-08-31
title: Using SvelteKit Endpoints in Netlify
published: true
---

I've been using Netlify recently to make a project that uses
endpoints. Unlike with Vercel where you can use the endpoint to fetch
the data dynamically Netlify needs to statically generate the data.

There's some SvelteKit `prerender` settings that need configuration
here's what I set in the `svelte.config.js` file:

```js
import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter(),
    prerender: {
      crawl: true,
      enabled: true,
      onError: 'continue',
      entries: ['*'],
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

export default config
```

Also for the pages that use the endpoint I've added the following to
any page that uses an endpoint:

```html
<script context="module">
  export const prerender = true
  // rest of the code for the endpoint
</script>
```
