<script lang="ts">
	import { superForm } from 'sveltekit-superforms'

	export let data
	const { form, errors, enhance, message } = superForm(data.form)
</script>

<div class="mx-auto max-w-xl">
	<form method="post" class="mb-8" use:enhance>
		<div>
			<label>
				<span class="block text-sm font-medium leading-6 text-gray-900"
					>Organisasjonsnummer/-navn</span
				>

				<div class="relative mt-2 rounded-md shadow-sm">
					<input
						type="text"
						name="query"
						class="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

	{#if $message}
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
				{#each $message.result as enhet}
					<li class="pt-4">
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
	{/if}
</div>
