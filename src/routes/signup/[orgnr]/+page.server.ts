import { agreementDetailsSchema } from '$lib/schema.js'
import type { Enhet } from '$lib/types.js'
import { error } from '@sveltejs/kit'
import { fail, superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'

export const load = async ({ params, fetch }) => {
	const brregResponse = await fetch(
		`https://data.brreg.no/enhetsregisteret/api/enheter/${params.orgnr}`
	)

	if (!brregResponse.ok) {
		error(brregResponse.status, brregResponse.statusText)
	}

	const brregData: Enhet = await brregResponse.json()
	const { navn: organizationName, organisasjonsnummer: organizationNumber } = brregData

	return {
		form: await superValidate(
			{ organizationName, organizationNumber },
			zod(agreementDetailsSchema),
			{ errors: false }
		)
	}
}

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(agreementDetailsSchema))

		if (!form.valid) return fail(400, { form })
	}
}
