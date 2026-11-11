import { defineConfig } from 'astro/config';
import sidenotes from './src/lib/sidenotes.mjs';

export default defineConfig({
  site: 'https://alepistola.github.io',
  markdown: {
    rehypePlugins: [sidenotes],
    shikiConfig: { theme: 'github-dark-dimmed', wrap: false },
  },
});
