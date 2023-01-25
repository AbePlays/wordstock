import netlify from '@astrojs/netlify/functions'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind()],
})
