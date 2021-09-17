<script>
  import { pages, siteName } from '$lib/site-config'
  import ThemeSelect from './theme-select.svelte'
</script>

<div
  class="navbar mb-2 shadow-lg bg-neutral text-neutral-content mb-16 sticky top-0 z-10"
>
  <div class="px-2 mx-2 navbar-start">
    <span class="text-lg font-bold">{siteName}</span>
  </div>
  <div class="dropdown lg:hidden dropdown-right">
    <div tabindex="0" class="m-1 btn">Links</div>
    <ul
      tabindex="0"
      class="p-2 shadow menu dropdown-content bg-neutral text-neutral-content rounded-box w-52 "
    >
      {#each pages as { title, path }}
        <li>
          <a sveltekit:prefetch href={path}>{title}</a>
        </li>
      {/each}
    </ul>
  </div>
  <div class="hidden px-2 mx-2 navbar-center lg:flex">
    <div class="flex items-stretch">
      {#each pages as { title, path }}
        <a
          sveltekit:prefetch
          href={path}
          class="btn btn-ghost btn-sm rounded-btn">{title}</a
        >
      {/each}
    </div>
  </div>
  <div class="navbar-end">
    <ThemeSelect />
  </div>
</div>
