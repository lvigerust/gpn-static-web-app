<script lang="ts">
	import { page } from '$app/stores'

	$: user = $page.data.user
</script>

<header class="border-b">
	<nav class="container mx-auto grid w-full grid-cols-3 px-2 py-8 font-medium lg:px-4">
		<div class="flex">
			<a href="/">
				<img src="/images/gp-logo.svg" alt="Grønt Punkt Norge logo" />
			</a>
		</div>

		<ul class="flex items-center justify-center gap-x-8">
			<li><a href="/membership">Medlemskap</a></li>
		</ul>

		<div class="flex items-center justify-end">
			{#if user}
				<a href="/api/auth/logout">Logg ut</a>
			{:else}
				<a href="/login">Logg inn</a>
			{/if}
		</div>
	</nav>
</header>
