<script context="module">
  export const load = async () => {
    try {
      const copy = await import(`../../copy/about.md`)
      return {
        props: {
          copy: copy.default,
        },
      }
    } catch (e) {
      return {
        status: 404,
        error: 'Uh oh!',
      }
    }
  }
</script>

<script>
  export let copy
</script>

<h1 class="font-bold mb-5 text-5xl">About</h1>
<div class="all-prose break-normal">
  <svelte:component this={copy} />
</div>
