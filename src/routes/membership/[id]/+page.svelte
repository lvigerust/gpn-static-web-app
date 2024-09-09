<script lang="ts">
	export let data;

	$: ({ membershipId } = data);
</script>

<h1 class="text-3xl font-bold tracking-tight">Viewing membership with ID: {membershipId}</h1>
