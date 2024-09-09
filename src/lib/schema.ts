import { z } from 'zod'

export const agreementDetailsSchema = z.object({
	organizationName: z.string(),
	organizationEmail: z.string().email(),
	organizationNumber: z.string().length(9),
	contactFirstName: z.string(),
	contactLastName: z.string(),
	contactEmail: z.string().email(),
	contactMobile: z.string().length(8),
	successRedirectUrl: z.string(),
	rejectRedirectUrl: z.string()
})
