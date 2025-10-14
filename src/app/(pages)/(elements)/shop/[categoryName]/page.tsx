import ElementPage from "@/_components/elements/element"
import NotFound from "@/_components/layout/not-found"
import SinglePageLayout from "@/_components/layout/single-page-layout"
import { productsTree } from "@/_lib/products-mock"
import { setCleanCategoryName } from "@/_lib/utils"

type Params = Promise<{ categoryName: string }>
type SearchParams = Promise<{
	from: "services" | "shop" | "favorites" | "cart"
	id: string
}>

export async function generateStaticParams() {
	return productsTree.map(category => ({ categoryName: category.title }))
}

export default async function ServerProductPage({
	params,
	searchParams,
}: {
	params: Params
	searchParams: SearchParams
}) {
	const { categoryName } = await params
	const cleanCategoryName = setCleanCategoryName(categoryName)
	const from = (await searchParams)?.from as
		| "services"
		| "shop"
		| "favorites"
		| "cart"
	const id = (await searchParams)?.id as string

	const productCategories = productsTree.find(
		category => category.title === cleanCategoryName
	)?.elements

	if (!productCategories) {
		return <NotFound />
	}

	return (
		<SinglePageLayout from={from} id={id}>
			{productCategories?.map(product => (
				<ElementPage
					key={product.id}
					categoryName={categoryName}
					element={product}
				/>
			))}
		</SinglePageLayout>
	)
}
