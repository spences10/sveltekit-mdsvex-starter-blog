<script context="module">
  const files = import.meta.glob('../posts/**/*.{md,mdx}')
  import { getAllPosts } from '$lib/util'
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load() {
    const allPosts = await getAllPosts(files)

    // const posts = allPosts.filter(([_, post]) => post.published)
    allPosts.sort(([_slugA, a], [_slugB, b]) =>
      a.date > b.date ? -1 : 1
    )

    return {
      props: {
        posts: allPosts,
      },
    }
  }
  // export async function load() {
  //   const posts = import.meta.globEager('../posts/**/*.{md,mdx}')
  //   const postSlugs = []
  //   for (const path in posts) {
  //     const fileName = path.split(`/`)[path.split(`/`).length - 1]
  //     postSlugs.push(fileName.replace(/\.[^/.]+$/, ''))
  //   }

  //   const postsList = Object.values(posts)
  //   const postsMeta = postsList.map(post => {
  //     return post.metadata
  //   })

  //   return {
  //     props: {
  //       slugs: postSlugs,
  //       posts: postsMeta,
  //     },
  //   }
  // }
</script>

<script>
  export let posts
</script>

<ul>
  {#each posts as [slug, { title }]}
    <!-- <pre>{JSON.stringify(post, null, 2)}</pre> -->
    <li
      class="text-4xl font-medium my-5 hover:underline hover:text-purple-600"
    >
      <a sveltekit:prefetch href={`/${slug}`}>{title}</a>
    </li>
  {/each}
</ul>
