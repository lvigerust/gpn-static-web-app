import { redirect } from '@sveltejs/kit'

export const load = async () => {
	// Check for existing membership(s)
	return {
		membership: null
	}

	redirect(301, '/signup')
}
