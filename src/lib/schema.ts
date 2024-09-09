import { z } from 'zod'

export const agreementDetailsSchema = z.object({
	organizationNumber: z.string().length(9, 'Organisasjonsnummeret må være 9 siffer'),
	organizationName: z.string().min(2, 'Organisasjonsnavn er påkrevd'),
	organizationEmail: z.string().email('E-postadressen er ugyldig'),
	contactFirstName: z.string().min(2, 'Fornavn er påkrevd'),
	contactLastName: z.string().min(2, 'Etternavn er påkrevd'),
	contactEmail: z.string().email('E-postadressen er ugyldig'),
	contactMobile: z.string().length(8, 'Mobilnummeret må være 8 siffer'),
	successRedirectUrl: z.string(),
	rejectRedirectUrl: z.string()
})
