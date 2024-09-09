import { message, superValidate, type Infer } from 'sveltekit-superforms/server'
import { zod } from 'sveltekit-superforms/adapters'
import { z } from 'zod'
import { fail } from '@sveltejs/kit'
import type { Enhet } from '$lib/types.js'

const searchBrregSchema = z.object({
	query: z.string().min(1, 'Vennligst skriv inn et organisasjonsnummer eller navn')
})

type Message = { result: Enhet | Enhet[] }

export const load = async () => {
	const form = await superValidate<Infer<typeof searchBrregSchema>, Message>(zod(searchBrregSchema))

	return {
		form
	}
}

export const actions = {
	default: async ({ request, fetch }) => {
		const form = await superValidate<Infer<typeof searchBrregSchema>, Message>(
			request,
			zod(searchBrregSchema)
		)

		if (!form.valid) return fail(400, { form })

		if (/^\d{9}$/.test(form.data.query)) {
			const brregResponse = await fetch(
				`https://data.brreg.no/enhetsregisteret/api/enheter/${form.data.query}`
			)

			if (!brregResponse.ok) {
				return fail(400, { message: 'Failed to fetch data from Brreg' })
			}

			const data = await brregResponse.json()

			return message(form, { result: data })
		} else {
			const brregResponse = await fetch(
				`https://data.brreg.no/enhetsregisteret/api/enheter?navn=${form.data.query}`
			)

			if (!brregResponse.ok) {
				return fail(400, { message: 'Failed to fetch data from Brreg' })
			}

			const data = await brregResponse.json()

			return message(form, { result: data._embedded.enheter })
		}
	}
}

// url = `https://data.brreg.no/enhetsregisteret/api/enheter?navn=${query}`
