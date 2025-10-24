import ElementPage from "@/_components/elements/element"
import NotFound from "@/_components/layout/not-found"
import SinglePageLayout from "@/_components/layout/single-page-layout"
import { productsTree } from "@/_lib/products-mock"

type Params = Promise<{ categoryID: string }>
type SearchParams = Promise<{
	from: "services" | "shop" | "favorites" | "cart"
	id: string
}>

export async function generateStaticParams() {
	return productsTree.map(category => ({ categoryID: category.id.toString() }))
}

export default async function ServerProductPage({
	params,
	searchParams,
}: {
	params: Params
	searchParams: SearchParams
}) {
	const { categoryID } = await params
	const id = (await searchParams)?.id
	const from = (await searchParams)?.from as
		| "services"
		| "shop"
		| "favorites"
		| "cart"

	const categoryElements = productsTree.find(
		category => category.id === Number(categoryID)
	)?.elements

	if (!categoryElements) {
		return <NotFound />
	}

	return (
		<SinglePageLayout from={from} id={id}>
			{categoryElements?.map(element => (
				<ElementPage
					key={element.id}
					categoryName={element.category_title}
					element={element}
				/>
			))}
		</SinglePageLayout>
	)
}
