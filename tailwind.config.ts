import type { Config } from 'tailwindcss'
import tailwindforms from '@tailwindcss/forms'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [tailwindforms]
} as Config
