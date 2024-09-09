<h1 class="text-3xl font-bold tracking-tight">Hello from Azure Static Web Apps</h1>

<form action="?/redirect" method="post" class="mt-12 max-w-sm">
	<label>
		<div>
			<label for="price">
				<span class="block text-sm font-medium leading-6 text-gray-900"
					>Gå til dynamisk medlemskap</span
				>

				<div class="relative mt-2 rounded-md shadow-sm">
					<input
						type="text"
						name="pathname"
						class="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						placeholder="apetor"
						required
					/>
					<div class="absolute inset-y-0 right-0 flex items-center">
						<button
							type="submit"
							class="h-full rounded-md border-0 bg-transparent px-4 py-0 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
							>→</button
						>
					</div>
				</div>
			</label>
		</div>
	</label>
</form>
