<script lang="ts">
	import { membershipPaymentDetails } from '$lib/schema.js'
	import { Control, Field, FieldErrors, Label } from 'formsnap'
	import { superForm } from 'sveltekit-superforms'
	import { zod } from 'sveltekit-superforms/adapters'

	export let data

	const form = superForm(data.form, {
		validators: zod(membershipPaymentDetails)
	})
	const { form: formData, enhance } = form
</script>

<form method="post" class="mx-auto grid max-w-2xl grid-cols-12 gap-x-6 gap-y-5" use:enhance>
	<div class="col-span-full">
		<Field {form} name="cardholderName">
			<Control let:attrs>
				<Label>Kortholderens navn</Label>
				<input
					{...attrs}
					type="text"
					placeholder="Bilbo Baggins"
					bind:value={$formData.cardholderName}
				/>
			</Control>
			<FieldErrors />
		</Field>
	</div>

	<div class="col-span-full">
		<Field {form} name="cardNumber">
			<Control let:attrs>
				<Label>Kortnummer</Label>
				<input
					{...attrs}
					type="text"
					placeholder="1234 1234 1234 1234"
					bind:value={$formData.cardNumber}
				/>
			</Control>
			<FieldErrors />
		</Field>
	</div>

	<div class="col-span-6">
		<Field {form} name="expiryDate">
			<Control let:attrs>
				<Label>Utløpsdato</Label>
				<input {...attrs} type="text" placeholder="MM/YY" bind:value={$formData.expiryDate} />
			</Control>
			<FieldErrors />
		</Field>
	</div>

	<div class="col-span-6">
		<Field {form} name="cvc">
			<Control let:attrs>
				<Label>CVC</Label>
				<input {...attrs} type="text" placeholder="123" bind:value={$formData.cvc} />
			</Control>
			<FieldErrors />
		</Field>
	</div>

	<!-- <div class="col-span-full my-5 h-px bg-zinc-950/20"></div> -->

	<div class="col-span-6">
		<Field {form} name="billingStreetAddress">
			<Control let:attrs>
				<Label>Faktureringsadresse</Label>
				<input
					{...attrs}
					type="text"
					placeholder="Rådhusgata 5"
					bind:value={$formData.billingStreetAddress}
				/>
			</Control>
			<FieldErrors />
		</Field>
	</div>

	<div class="col-span-6">
		<Field {form} name="billingPostalCode">
			<Control let:attrs>
				<Label>Postnummer</Label>
				<input {...attrs} type="text" placeholder="3475" bind:value={$formData.billingPostalCode} />
			</Control>
			<FieldErrors />
		</Field>
	</div>

	<div class="col-span-3 col-start-10 mt-4">
		<button
			type="submit"
			class="w-full rounded-md bg-zinc-950 py-1.5 text-center font-semibold text-white"
			>Betal</button
		>
	</div>
</form>
