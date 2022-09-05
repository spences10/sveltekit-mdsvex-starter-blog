import { error } from '@sveltejs/kit'

export const load = async () => {
  try {
    const copy = await import(`../../../copy/about.md`)
    return {
      copy: copy.default,
    }
  } catch (e) {
    throw error(
      404,
      `Uh oh! Sorry, looks like that page doesn't exist`
    )
  }
}
