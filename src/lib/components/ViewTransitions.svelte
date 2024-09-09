<script lang="ts">
	import { onNavigate } from '$app/navigation'

	onNavigate((navigation) => {
		// @ts-expect-error - View Transition API is not yet typed
		if (!document.startViewTransition) return

		return new Promise((resolve) => {
			// @ts-expect-error - View Transition API is not yet typed
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})
</script>
