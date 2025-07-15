import { productsData } from "@/app/_lib/products"
import ProductPage from "../product"

export default function Product4Page() {
	const product = productsData[3]

	return <ProductPage product={product} />
}
