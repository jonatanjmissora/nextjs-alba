import { productsData } from "@/app/_lib/products"
import ProductPage from "./product"

type Params = Promise<{ id: string }>
type SearchParams = Promise<{ from: "services" | "shop" | "favorites" | "cart" }>

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
		return <span>Product not found</span>
	}

	return <ProductPage product={product} from={from} />
}
