<script>
  import { pages, siteName } from '$lib/site-config'
  import ThemeSelect from './theme-select.svelte'
</script>

<div
  class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box mb-16"
>
  <div class="px-2 mx-2 navbar-start">
    <span class="text-lg font-bold">{siteName}</span>
  </div>
  <div class="hidden px-2 mx-2 navbar-center lg:flex">
    <div class="flex items-stretch">
      {#each pages as { title, path }}
        <a href={path} class="btn btn-ghost btn-sm rounded-btn"
          >{title}</a
        >
      {/each}
    </div>
  </div>
  <div class="navbar-end">
    <ThemeSelect />
  </div>
</div>
