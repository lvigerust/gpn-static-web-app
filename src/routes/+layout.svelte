<script lang="ts">
	import '../app.css'
	import { Header, ViewTransitions } from '$components'
</script>

<ViewTransitions />
<Header />

<main class="container mx-auto py-24">
	<slot />
</main>
