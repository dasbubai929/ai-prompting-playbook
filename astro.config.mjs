import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// Replace with your real domain before deploying — required for
// canonical URLs and the auto-generated sitemap.xml to be correct.
const SITE_URL = "https://ai-prompts-playbook.pages.dev";

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  adapter: cloudflare()
});