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

export const membershipPaymentDetails = z.object({
	cardholderName: z.string().min(2, 'Kortholders navn er påkrevd'),
	cardNumber: z.string().length(16, 'Kortnummeret må være 16 siffer'),
	expiryDate: z.string().regex(/^\d{2}\/\d{2}$/, 'Utløpsdatoen må være på formatet MM/ÅÅ'),
	cvc: z.string().length(3, 'CVC må være 3 siffer'),
	billingStreetAddress: z.string().min(2, 'Gateadresse er påkrevd'),
	billingPostalCode: z.string().length(4, 'Postnummeret må være 4 siffer')
})
