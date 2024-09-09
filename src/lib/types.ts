export type Enhet = {
	organisasjonsnummer: string
	navn: string
	stiftelsesdato: string
	forretningsadresse: {
		kommune: string
		landkode: string
		postnummer: string
		adresse: string[]
		land: string
		kommunenummer: string
		poststed: string
	}
	naeringskode1: {
		kode: string
		beskrivelse: string
	}
}
