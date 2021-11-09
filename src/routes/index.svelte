<script>
  import EndlessClouds from '@components/endless-clouds.svelte'
  import Head from '@components/head.svelte'
  import { description, siteName } from '@lib/site-config'
</script>

<Head title={`Hello World`} />

<div class="mb-20 min-h-[65vh] hero">
  <EndlessClouds />
  <div class="bg-opacity-95 hero-overlay" />
  <div class="text-center text-neutral-content hero-content">
    <div class="max-w-2xl">
      <h1 class="font-bold text-secondary mb-5 text-5xl">
        Hello there
      </h1>
      <h2 class="font-bold text-secondary mb-5 text-4xl">
        Welcome to the {siteName}
      </h2>
      <p class="mb-5">
        {description}
      </p>
      <a sveltekit:prefetch href={`/posts`} class="btn btn-primary"
        >Check Out The Posts Page</a
      >
    </div>
  </div>
</div>
