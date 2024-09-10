<script lang="ts">
	import { Control, Field, FieldErrors, Label } from 'formsnap'
	import { fly } from 'svelte/transition'
	import { superForm } from 'sveltekit-superforms'
	import { Icon, MagnifyingGlass } from 'svelte-hero-icons'

	export let data

	const form = superForm(data.form)
	const { form: formData, enhance, message } = form
</script>

<div class="mx-auto max-w-2xl">
	<form method="post" class="mb-8" use:enhance>
		<Field {form} name="query">
			<Control let:attrs>
				<Label>Organisasjonsnummer/-navn</Label>

				<div class="relative rounded-md shadow-sm">
					<input {...attrs} type="text" placeholder="Din bedrift" bind:value={$formData.query} />
					<div class="absolute inset-y-0 right-0 flex items-center">
						<button
							type="submit"
							class="h-full rounded-md border-0 bg-transparent px-4 py-0 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
						>
							<Icon src={MagnifyingGlass} class="size-5" mini />
						</button>
					</div>
				</div>
			</Control>
			<FieldErrors />
		</Field>
	</form>

	{#if $message && $message.result}
		<ul class="space-y-4 divide-y divide-zinc-950/10">
			{#if 'organisasjonsnummer' in $message.result}
				<li class="pt-4">
					<div class="flex items-center justify-between">
						<hgroup>
							<h2>{$message.result.navn}</h2>
							<p>{$message.result.organisasjonsnummer}</p>
						</hgroup>

						<div>
							<a href={`/signup/${$message.result.organisasjonsnummer}`}>Start signering</a>
						</div>
					</div>
				</li>
			{:else}
				{#each $message.result as enhet, index}
					<li class="pt-4" in:fly|global={{ y: -10, delay: index * 40 }}>
						<div class="flex items-center justify-between">
							<hgroup>
								<h2>{enhet.navn}</h2>
								<p>{enhet.organisasjonsnummer}</p>
							</hgroup>

							<div>
								<a href={`/signup/${enhet.organisasjonsnummer}`}>Start signering</a>
							</div>
						</div>
					</li>
				{/each}
			{/if}
		</ul>
	{:else if $message && !$message.result}
		<p>Vi fant ingen bedrifter med det søket.</p>
	{/if}
</div>
