<script lang="ts">
	import { Field, Control, Label, FieldErrors } from 'formsnap'
	import { superForm } from 'sveltekit-superforms'

	export let data

	const form = superForm(data.form)
	const { form: formData, errors, enhance } = form
</script>

<form action="?/login" method="post" class="mx-auto max-w-xl space-y-5" use:enhance>
	<div>
		<Field {form} name="username">
			<Control let:attrs>
				<Label>Brukernavn</Label>
				<input {...attrs} type="text" bind:value={$formData.username} />
			</Control>
			<FieldErrors />
		</Field>
	</div>

	<div>
		<Field {form} name="password">
			<Control let:attrs>
				<Label>Passord</Label>
				<input {...attrs} type="password" bind:value={$formData.password} />
			</Control>
			<FieldErrors />
		</Field>
	</div>

	<div>
		<button type="submit">Logg inn</button>
	</div>
</form>
