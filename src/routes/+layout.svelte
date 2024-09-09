<script lang="ts">
	import '../app.css';
</script>

<nav class="container mx-auto w-full py-8">
	<ul class="flex gap-x-8">
		<li><a href="/1">Page 1</a></li>
		<li><a href="/2">Page 2</a></li>
	</ul>
</nav>

<main class="container mx-auto">
	<slot />
</main>
