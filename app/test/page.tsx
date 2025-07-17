export default async function page({
	searchParams,
}: {
	searchParams: Promise<{ meta: string | undefined }>
}) {
	const { meta } = await searchParams

	return (
		<div className="w-full h-full flex items-center justify-center text-3xl">
			page {meta}
		</div>
	)
}
