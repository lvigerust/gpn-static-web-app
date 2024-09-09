<script lang="ts">
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'

	let countdown: number = 5
	let intervalId: number

	onMount(() => {
		intervalId = setInterval(() => {
			if (countdown > 1) {
				countdown--
			} else {
				clearInterval(intervalId)
				goto('/signup')
			}
		}, 1000)

		return () => {
			clearInterval(intervalId)
		}
	})
</script>

<div class="flex flex-col items-center gap-y-8">
	<h1 class="text-4xl font-semibold tracking-tight">
		Fant ingen medlemskap, videresender om… {countdown}
	</h1>

	<a
		href="/signup"
		class="inline-flex min-w-36 justify-center rounded-md bg-zinc-950 px-4 py-1.5 text-base/7 font-semibold text-white"
		>Fortsett nå</a
	>
</div>
