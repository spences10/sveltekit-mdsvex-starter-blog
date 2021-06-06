// https://github.com/mvasigh/sveltekit-mdsvex-blog/blob/4cde064ece/src/lib/util.js

export async function getAllPosts(globArr) {
  const postPromises = []

  for (let [path, resolver] of Object.entries(globArr)) {
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
    const promise = resolver().then(post => [
      slug,
      {
        ...post.metadata,
        date: new Date(post.metadata.date),
      },
    ])
    postPromises.push(promise)
  }

  return Promise.all(postPromises)
}

export function fromEntries(entries) {
  return entries.reduce((acc, [key, val]) => {
    acc[key] = val
    return acc
  }, {})
}
