<script lang="ts">
	import { agreementDetailsSchema } from '$lib/schema.js'
	import { Control, Field, FieldErrors, Label } from 'formsnap'
	import { superForm } from 'sveltekit-superforms'
	import { zod } from 'sveltekit-superforms/adapters'

	export let data

	const form = superForm(data.form, {
		validators: zod(agreementDetailsSchema)
	})
	const { form: formData, enhance } = form
</script>

<form method="post" class="mx-auto grid max-w-2xl grid-cols-12 gap-x-6 gap-y-5" use:enhance>
	<div class="col-span-6">
		<Field {form} name="organizationNumber">
			<Control let:attrs>
				<Label>Organisasjonsnummer</Label>
				<input
					type="hidden"
					name="organizationNumber"
					aria-required="true"
					bind:value={$formData.organizationNumber}
				/>
				<input {...attrs} type="text" disabled bind:value={$formData.organizationNumber} />
			</Control>
			<FieldErrors />
		</Field>
	</div>

	<div class="col-span-6">
		<Field {form} name="organizationName">
			<Control let:attrs>
				<Label>Organisasjonsnavn</Label>
				<input
					type="hidden"
					name="organizationName"
					aria-required="true"
					bind:value={$formData.organizationName}
				/>
				<input {...attrs} type="text" disabled bind:value={$formData.organizationName} />
			</Control>
			<FieldErrors />
		</Field>
	</div>

	<div class="col-span-6">
		<Field {form} name="organizationEmail">
			<Control let:attrs>
				<Label>E-post til organisasjon</Label>
				<input
					{...attrs}
					type="email"
					placeholder="E-post til bedrift"
					autocomplete="email"
					bind:value={$formData.organizationEmail}
				/>
			</Control>
			<FieldErrors />
		</Field>
	</div>

	<div class="col-span-full row-start-3 my-5 h-px bg-zinc-950/20"></div>

	<div class="col-span-6 row-start-4">
		<Field {form} name="contactFirstName">
			<Control let:attrs>
				<Label>Fornavn</Label>
				<input
					{...attrs}
					type="text"
					placeholder="Ditt fornavn"
					autocomplete="given-name"
					bind:value={$formData.contactFirstName}
				/>
			</Control>
			<FieldErrors />
		</Field>
	</div>

	<div class="col-span-6 row-start-4">
		<Field {form} name="contactLastName">
			<Control let:attrs>
				<Label>Etternavn</Label>
				<input
					{...attrs}
					type="text"
					placeholder="Ditt etternavn"
					autocomplete="family-name"
					bind:value={$formData.contactLastName}
				/>
			</Control>
			<FieldErrors />
		</Field>
	</div>

	<div class="col-span-6 row-start-5">
		<Field {form} name="contactEmail">
			<Control let:attrs>
				<Label>E-post</Label>
				<input
					{...attrs}
					type="email"
					placeholder="Din e-post"
					autocomplete="email"
					bind:value={$formData.contactEmail}
				/>
			</Control>
			<FieldErrors />
		</Field>
	</div>

	<div class="col-span-6 row-start-5">
		<Field {form} name="contactMobile">
			<Control let:attrs>
				<Label>Telefonnummer</Label>
				<input
					{...attrs}
					type="text"
					placeholder="Ditt telefonnummer"
					autocomplete="tel"
					bind:value={$formData.contactMobile}
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
			>Signer avtale</button
		>
	</div>
</form>
