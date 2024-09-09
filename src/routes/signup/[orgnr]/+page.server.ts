import type { Enhet } from '$lib/types.js'
import { error } from '@sveltejs/kit'

export const load = async ({ params, fetch }) => {
	const getOrganizationDetails = async () => {
		const brregResponse = await fetch(
			`https://data.brreg.no/enhetsregisteret/api/enheter/${params.orgnr}`
		)

		if (!brregResponse.ok) {
			error(brregResponse.status, brregResponse.statusText)
		}

		const brregData: Enhet = await brregResponse.json()

		return brregData
	}

	return {
		organizationDetails: await getOrganizationDetails()
	}
}
