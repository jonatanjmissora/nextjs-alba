import { servicesData } from "@/app/_lib/services"
import Image from "next/image"

export default function ServicePage({params}: {params: {id: string}}) {

	const service = servicesData.find(service => service.id === Number(params.id))

	if(!service) return <div>Service not found</div>

	return (

		<div className="w-full h-screen px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] border">
			<ProductHeader />
			<div className="w-full h-[50dvh] flex justify-center items-center bg-green-500">
				<Image src={service?.image} alt={service?.title} width={1900} height={2800}  className="w-full h-full object-cover" />
			</div>
			<ProductFooter />
		</div>
	)
}


const ProductHeader = () => {
	return (
		<div className="w-full h-[15dvh] border-b-2 border-[var(--secondary-green)] flex flex-col justify-end">
			<h1 className="header py-1 px-16">Product Header</h1>
		</div>
	)
}

const ProductFooter = () => {
	return (
		<div className="w-full h-[10dvh] border-t-2 border-[var(--primary-green)] mt-12">
			<p className="py-2 text-sm text-[var(--primary-green)]">
				© 2025 ALBA
			</p>
		</div>
	)
}