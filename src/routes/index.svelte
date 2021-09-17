<script>
  import EndlessClouds from '$lib/components/endless-clouds.svelte'
  import { description, siteName } from '$lib/site-config'
</script>

<div class="hero min-h-[65vh] mb-20">
  <EndlessClouds />
  <div class="hero-overlay bg-opacity-75" />
  <div class="text-center hero-content text-neutral-content">
    <div class="max-w-2xl break-all">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <h2 class="mb-5 text-4xl font-bold">
        Welcome to the {siteName}
      </h2>
      <p class="mb-5 break-words">
        {description}
      </p>
      <a sveltekit:prefetch href={`/posts`} class="btn btn-primary"
        >Check Out The Posts Page</a
      >
    </div>
  </div>
</div>
