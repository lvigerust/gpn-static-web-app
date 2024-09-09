import { redirect } from '@sveltejs/kit'

export const actions = {
	redirect: async ({ request }) => {
		const data = await request.formData()

		const pathname = String(data.get('pathname'))

		redirect(303, `/membership/${pathname}`)
	}
}
