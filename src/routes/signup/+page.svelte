<script lang="ts">
	import { fly } from 'svelte/transition'
	import { superForm } from 'sveltekit-superforms'

	export let data
	const { form, errors, enhance, message } = superForm(data.form)
</script>

<div class="mx-auto max-w-xl">
	<form method="post" class="mb-8" use:enhance>
		<div>
			<label>
				<span class="mb-2.5 block font-medium text-gray-900">Organisasjonsnummer/-navn</span>

				<div class="relative rounded-md shadow-sm">
					<input
						type="text"
						name="query"
						class="block w-full rounded-md border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
						placeholder="Din bedrift"
						bind:value={$form.query}
					/>
					<div class="absolute inset-y-0 right-0 flex items-center">
						<button
							type="submit"
							class="h-full rounded-md border-0 bg-transparent px-4 py-0 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
							>→</button
						>
					</div>
				</div>
			</label>
			{#if $errors.query}
				<p class="mt-2 text-sm/6 text-red-500">{$errors.query}</p>
			{/if}
		</div>
	</form>

	{#if $message && $message.result}
		{#if 'organisasjonsnummer' in $message.result}
			<div class="flex items-center justify-between">
				<hgroup>
					<h2>{$message.result.navn}</h2>
					<p>{$message.result.organisasjonsnummer}</p>
				</hgroup>

				<div>
					<a href={`/signup/${$message.result.organisasjonsnummer}`}>Start signering</a>
				</div>
			</div>
		{:else}
			<ul class="space-y-4 divide-y divide-zinc-950/10">
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
			</ul>
		{/if}
	{:else if $message && !$message.result}
		<p>Vi fant ingen bedrifter med det søket.</p>
	{/if}
</div>
