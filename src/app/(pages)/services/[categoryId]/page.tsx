import { servicesCategories } from "@/_lib/services"
import ServicePage from "./service"
import SinglePageFooter from "@/_components/layout/single-page-footer"
import SinglePageLeaf from "@/_components/layout/single-page-leaf"
import SinglePageHeader from "@/_components/layout/single-page-header"

type Params = Promise<{
	categoryId: string
}>

type SearchParams = Promise<{
	scrollTo: string
	from: "services" | "shop" | "favorites" | "cart"
}>

export async function generateStaticParams() {
	return servicesCategories.map(category => ({ categoryId: category.id }))
}

export default async function ServerServiciosPage({
	params,
	searchParams,
}: {
	params: Params
	searchParams: SearchParams
}) {
	const { categoryId } = await params
	const { scrollTo } = await searchParams
	const { from = "services" } = await searchParams

	const serviceCategories = servicesCategories.find(
		category => category.id === categoryId
	)?.subCategories

	return (
		<section className="w-full min-h-[100svh] sm:min-h-screen px-6 sm:px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] flex flex-col relative">
			<SinglePageHeader text="Volver" href={from} />
			{serviceCategories?.map(service => (
				<ServicePage
					key={service.id}
					scrollTo={scrollTo}
					serviceId={service.id}
					category={categoryId}
				/>
			))}
			<SinglePageFooter />

			<SinglePageLeaf />
		</section>
	)
}
