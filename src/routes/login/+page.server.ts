import { loginSchema } from '$lib/schema.js'
import { redirect } from '@sveltejs/kit'
import { fail, superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'

export const load = async () => {
	return {
		form: await superValidate(zod(loginSchema))
	}
}

export const actions = {
	login: async ({ request, cookies }) => {
		const form = await superValidate(request, zod(loginSchema))

		if (!form.valid) return fail(400, { form })

		cookies.set('user', form.data.username, { path: '/' })

		redirect(303, '/membership')
	}
}
