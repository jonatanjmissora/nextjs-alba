import ElementPage from "@/_components/elements/element"
import NotFound from "@/_components/layout/not-found"
import SinglePageLayout from "@/_components/layout/single-page-layout"
import { servicesTree } from "@/_lib/services-mock"
import { setCleanCategoryName } from "@/_lib/utils"

type Params = Promise<{
	categoryName: string
}>

type SearchParams = Promise<{
	from: "services" | "shop" | "favorites" | "cart"
	id: string
}>

export async function generateStaticParams() {
	return servicesTree.map(category => ({ categoryName: category.title }))
}

export default async function ServerServiciosPage({
	params,
	searchParams,
}: {
	params: Params
	searchParams?: SearchParams
}) {
	const { categoryName } = await params
	const cleanCategoryName = setCleanCategoryName(categoryName)
	const from = (await searchParams)?.from as
		| "services"
		| "shop"
		| "favorites"
		| "cart"
	const id = (await searchParams)?.id as string

	const serviceCategories = servicesTree.find(
		category => category.title === cleanCategoryName
	)?.elements

	if (!serviceCategories) {
		return <NotFound />
	}

	return (
		<SinglePageLayout from={from} id={id}>
			{serviceCategories?.map(service => (
				<ElementPage
					key={service.id}
					categoryName={categoryName}
					element={service}
				/>
			))}
		</SinglePageLayout>
	)
}
