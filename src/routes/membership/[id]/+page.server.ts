export const load = async ({ params }) => {
	const membershipId = params.id;

	return {
		membershipId
	};
};
