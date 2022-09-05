<script>
  import Head from '@components/head.svelte'

  export let data
  let { copy } = data
</script>

<Head title={`About`} />

<h1 class="font-bold mb-5 text-5xl">About</h1>
<div class="mb-10 all-prose">
  <svelte:component this={copy} />
</div>

<div class="flex flex-col mb-20 w-full">
  <div class="divider" />
</div>
