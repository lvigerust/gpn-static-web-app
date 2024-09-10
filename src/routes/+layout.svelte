<script lang="ts">
	import '../app.css'
	import { Header, ViewTransitions } from '$components'
</script>

<ViewTransitions />
<Header />

<main class="container mx-auto px-2 py-24 lg:px-4">
	<slot />
</main>
