import { type Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'

const first: Handle = async ({ event, resolve }) => {
	return await resolve(event)
}

export const handle: Handle = sequence(first)
