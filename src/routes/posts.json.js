const slugFromPath = path => {
  const pathSplit = path.split(`/`)
  const removeExtension = () => {
    // named files, in posts folder
    if (pathSplit.length === 4) {
      // remove file extension
      return pathSplit.slice(-1)[0].replace(/\.[^/.]+$/, '')
    }
    // else nested folder with index file
    return pathSplit
      .splice(3, pathSplit.length, -3)
      .join(`/`)
      .slice(0, -`index.md`.length - 1)
  }
  const slug = removeExtension()
  return slug
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ query }) {
  const modules = import.meta.glob(
    '../../posts/**/*.{md,svx,svelte.md}'
  )

  console.log({ modules })

  const postPromises = []
  const limit = Number(query.get('limit') ?? Infinity)

  if (Number.isNaN(limit)) {
    return {
      status: 400,
    }
  }

  for (let [path, resolver] of Object.entries(modules)) {
    const slug = slugFromPath(path)
    console.log('=====================')
    console.log(slug)
    console.log('=====================')
    const promise = resolver().then(post => ({
      slug,
      ...post.metadata,
    }))

    postPromises.push(promise)
  }

  const posts = await Promise.all(postPromises)
  const publishedPosts = posts
    .filter(post => post.published)
    .slice(0, limit)

  publishedPosts.sort((a, b) =>
    new Date(a.date) > new Date(b.date) ? -1 : 1
  )

  return {
    body: publishedPosts.slice(0, limit),
  }
}
