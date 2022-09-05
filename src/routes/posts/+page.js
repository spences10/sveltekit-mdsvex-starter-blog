// export const prerender = true

export async function load({ fetch }) {
  const res = await fetch(`/posts.json`)
  if (res.ok) {
    const { posts } = await res.json()
    return { posts }
  }
}
