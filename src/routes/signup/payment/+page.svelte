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

	let isLoading = false

	setTimeout(() => {
		isLoading = false
	}, 3000)
</script>

{#if isLoading}
	<div class="flex flex-col items-center justify-center gap-y-8">
		<svg
			class="size-12 animate-spin"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
			></circle>
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			></path>
		</svg>
		<h2 class="text-lg font-medium tracking-tight">Vennligst vent mens vi henter avtalen…</h2>
	</div>
{:else}
	<form method="post" class="mx-auto grid max-w-2xl grid-cols-12 gap-x-6 gap-y-5" use:enhance>
		<div class="col-span-full">
			<Field {form} name="cardholderName">
				<Control let:attrs>
					<Label>Kortholderens navn</Label>
					<input
						{...attrs}
						type="text"
						placeholder="Bilbo Baggins"
						autocomplete="cc-name"
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
						autocomplete="cc-number"
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
					<input
						{...attrs}
						type="text"
						placeholder="MM/YY"
						autocomplete="cc-exp"
						bind:value={$formData.expiryDate}
					/>
				</Control>
				<FieldErrors />
			</Field>
		</div>

		<div class="col-span-6">
			<Field {form} name="cvc">
				<Control let:attrs>
					<Label>CVC</Label>
					<input
						{...attrs}
						type="password"
						placeholder="123"
						autocomplete="cc-csc"
						bind:value={$formData.cvc}
					/>
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
						autocomplete="billing street-address"
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
					<input
						{...attrs}
						type="text"
						placeholder="3475"
						autocomplete="billing postal-code"
						bind:value={$formData.billingPostalCode}
					/>
				</Control>
				<FieldErrors />
			</Field>
		</div>

		<div class="col-span-full mt-4 flex justify-between">
			<a href="/signup" class="inline-block rounded-md px-4 py-1.5 text-center font-semibold"
				>Tilbake</a
			>
			<button
				type="submit"
				class="rounded-md bg-zinc-950 px-4 py-1.5 text-center font-semibold text-white"
				>Betal</button
			>
		</div>
	</form>
{/if}
