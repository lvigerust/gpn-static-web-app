<script lang="ts">
	import '../app.css';
	import { Navbar } from '$components';
</script>

<Navbar />

<main class="container mx-auto">
	<slot />
</main>
