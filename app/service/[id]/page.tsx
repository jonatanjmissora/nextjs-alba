
export default function ServicePage({params}: {params: {id: string}}) {
	return (
		<div className="w-full min-h-screen flex flex-col justify-between items-center">
			Service: {params.id}
		</div>
	)
}
