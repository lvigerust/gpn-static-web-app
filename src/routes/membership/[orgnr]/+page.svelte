<script lang="ts">
	export let data

	$: ({ organizationDetails } = data)
</script>

<pre>{JSON.stringify(organizationDetails, null, 2)}</pre>
