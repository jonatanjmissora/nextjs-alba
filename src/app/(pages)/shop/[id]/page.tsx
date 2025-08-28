import { productsData } from "@/_lib/products"
import ProductPage from "./product"
import NotFound from "@/_components/layout/not-found"

type Params = Promise<{ id: string }>
type SearchParams = Promise<{
	from: "services" | "shop" | "favorites" | "cart"
}>

export async function generateStaticParams() {
	return productsData.map(product => ({ id: product.id })).slice(0, 10)
}

export default async function ServerProductPage({
	params,
	searchParams,
}: {
	params: Params
	searchParams: SearchParams
}) {
	const { id } = await params
	const { from = "shop" } = await searchParams

	const product = productsData.find(product => product.id === id)

	if (!product) {
		return <NotFound />
	}

	return <ProductPage product={product} from={from} />
}
