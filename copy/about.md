## SvelteKit Blog Starter

A opinioned Markdown blog starter built with SvelteKit, MDSveX,
Tailwind CSS and DaisyUI.

Put your Markdown docs in the `/posts` directory. The route for the
post is determined from the containing folder.

So this file structure:

```text
this-project-directory/
├─ copy/
│  └─ a-post-about-bread/
│     └─ index.md
```

Will give this route: `posts/a-post-about-bread`.

Good to note if you want to include local images in your posts.

Give them the frontmatter:

```markdown
---
date: 2021-09-17
title: Hello world!
published: true
---
```

## Thanks

Heavily inspired from [Mehdi Vasigh]'s [sveltekit-mdsvex-blog] and
[Matt Jennings]'s [sveltekit-blog-template].

Also this solution from [Michael Oliver] on [this issue].

Uses:

- [SvelteKit]
- [MDSveX]
- [Tailwind CSS]
- [DaisyUI]

<!-- Links -->

[mehdi vasigh]: https://github.com/mvasigh
[sveltekit-mdsvex-blog]:
  https://github.com/mvasigh/sveltekit-mdsvex-blog
[matt jennings]: https://github.com/mattjennings
[sveltekit-blog-template]:
  https://github.com/mattjennings/sveltekit-blog-template
[michael oliver]: https://github.com/michael0liver
[this issue]: https://github.com/pngwn/MDsveX/issues/294
[sveltekit]: https://kit.svelte.dev/
[mdsvex]: https://mdsvex.com/
[tailwind css]: https://tailwindcss.com/
[daisyui]: https://daisyui.com/
