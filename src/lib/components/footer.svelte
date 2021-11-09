<script>
  import BadgeCheck from '@icons/badge-check.svelte'
  import GitHub from '@icons/git-hub..svelte'
  import Twitter from '@icons/twitter.svelte'
  import YouTube from '@icons/you-tube.svelte'
  import { socialLinks } from '@lib/site-config'
</script>

<footer class="bg-neutral text-neutral-content p-10 footer">
  <div>
    <BadgeCheck height={60} width={60} />
    <p>
      ACME Industries Ltd.
      <br />Providing reliable tech since 1992
    </p>
  </div>
  <div>
    <span class="footer-title">Social</span>
    <div class="grid grid-flow-col gap-4">
      <a href={socialLinks.find(x => x.title === 'Twitter').path}>
        <Twitter />
      </a>
      <a href={socialLinks.find(x => x.title === 'YouTube').path}>
        <YouTube />
      </a>
      <a href={socialLinks.find(x => x.title === 'GitHub').path}>
        <GitHub />
      </a>
    </div>
  </div>
</footer>
