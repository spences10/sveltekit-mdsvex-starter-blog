import relativeImages from 'mdsvex-relative-images'
import autolinkHeadings from 'rehype-autolink-headings'
import slugPlugin from 'rehype-slug'
import remarkExternalLinks from 'remark-external-links'
import readingTime from 'remark-reading-time'

const config = {
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool',
  },

  remarkPlugins: [
    // adds a `readingTime` frontmatter attribute
    readingTime(),
    relativeImages,
    // external links open in a new tab
    [remarkExternalLinks, { target: '_blank', rel: 'noopener' }],
  ],
  rehypePlugins: [
    slugPlugin,
    [
      autolinkHeadings,
      {
        behavior: 'wrap',
      },
    ],
  ],
}

export default config
