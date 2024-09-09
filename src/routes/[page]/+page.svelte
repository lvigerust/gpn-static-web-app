<script lang="ts">
	export let data;

	$: ({ page } = data);
</script>

<h1 class="text-5xl font-bold tracking-tight">Page {page} retrived from Azure Functions</h1>
