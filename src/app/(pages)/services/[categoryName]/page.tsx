import ServicePage from "./service"
import SinglePageFooter from "@/_components/layout/single-page-footer"
import SinglePageLeaf from "@/_components/layout/single-page-leaf"
import SinglePageHeader from "@/_components/layout/single-page-header"
import { servicesTree } from "@/_lib/services-mock"
import { setCleanCategoryName } from "@/_lib/utils"

type Params = Promise<{
	categoryName: string
}>

type SearchParams = Promise<{
	from: "services" | "shop" | "favorites" | "cart"
}>

export async function generateStaticParams() {
	return servicesTree.map(category => ({ categoryName: category.title }))
}

export default async function ServerServiciosPage({
	params,
	searchParams,
}: {
	params: Params
	searchParams: SearchParams
}) {
	const { categoryName } = await params
	const cleanCategoryName = setCleanCategoryName(categoryName)
	const { from = "services" } = await searchParams

	const serviceCategories = servicesTree.find(
		category => category.title === cleanCategoryName
	)?.elements

	return (
		<section className="w-full min-h-[100svh] sm:min-h-screen px-6 sm:px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] flex flex-col relative">
			<SinglePageHeader text="Volver" href={from} />
			{serviceCategories?.map(service => (
				<ServicePage
					key={service.id}
					categoryName={categoryName}
					service={service}
				/>
			))}
			<SinglePageFooter />

			<SinglePageLeaf />
		</section>
	)
}
