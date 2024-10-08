import azure from 'svelte-adapter-azure-swa'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: azure(),
		alias: {
			$components: 'src/lib/components'
		}
	}
}

export default config
