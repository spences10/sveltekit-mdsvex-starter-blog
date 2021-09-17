<script>
  import Footer from '$lib/components/footer.svelte'
  import Nav from '$lib/components/nav.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../styles.css'

  onMount(async () => {
    themeChange(false)
  })
</script>

<Nav />

<main
  class="mx-auto max-w-[90ch] px-4 relative sm:px-6 lg:px-8 break-all"
>
  <slot />
</main>

<Footer />
