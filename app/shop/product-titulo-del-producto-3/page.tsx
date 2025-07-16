import { productsData } from "@/app/_lib/products"
import ProductPage from "../product"

export default function Product3Page() {
	const product = productsData[2]

	return <ProductPage product={product} />
}
