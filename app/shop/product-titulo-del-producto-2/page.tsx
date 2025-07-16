import { productsData } from "@/app/_lib/products"
import ProductPage from "../product"

export default function Product2Page() {
	const product = productsData[1]

	return <ProductPage product={product} />
}
