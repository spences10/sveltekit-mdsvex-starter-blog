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
        error: `Uh oh! Sorry, looks like that page doesn't exist`,
      }
    }
  }
</script>

<script>
  import Head from '$lib/components/head.svelte'

  export let copy
</script>

<Head title={`About`} />

<h1 class="font-bold mb-5 text-5xl">About</h1>
<div class="mb-10 all-prose">
  <svelte:component this={copy} />
</div>

<div class="flex flex-col mb-20 w-full">
  <div class="divider" />
</div>
