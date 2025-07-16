import { productsData } from "@/app/_lib/products"
import ProductPage from "../product"

export default function Product1Page() {
	const product = productsData[0]

	return <ProductPage product={product} />
}
