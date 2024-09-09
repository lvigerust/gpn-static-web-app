<script lang="ts">
	export let data

	$: ({ organizationDetails } = data)
</script>

<form class="mx-auto grid max-w-2xl grid-cols-12 gap-x-6 gap-y-5">
	<div class="col-span-6">
		<label for="organizationNumber">Organisasjonsnummer</label>
		<input
			type="text"
			name="organizationNumber"
			id="organizationNumber"
			value={organizationDetails.organisasjonsnummer}
			class="form-input"
		/>
	</div>
	<div class="col-span-6">
		<label for="organizationName">Organisasjonsnavn</label>
		<input
			type="text"
			name="organizationName"
			id="organizationName"
			value={organizationDetails.navn}
			class="form-input"
		/>
	</div>
	<div class="col-span-6">
		<label for="organizationEmail">E-post til organisasjon</label>
		<input
			type="email"
			name="organizationEmail"
			id="organizationEmail"
			placeholder="E-post til bedrift"
			class="form-input"
		/>
	</div>
</form>

<!-- <pre>{JSON.stringify(organizationDetails, null, 2)}</pre> -->

<style lang="postcss">
	label {
		@apply mb-2 block font-medium;
	}

	.form-input {
		@apply w-full rounded-md;
	}
</style>
