import { productsData } from "@/app/_lib/products"
import ProductPage from "./product"

export default function ServerProductPage({
    params,
    searchParams,
}: {
    params: { id: string }
    searchParams: { [key: string]: string | undefined }
}) {
    const id = params.id
    const from = searchParams.from ?? "products"

    const product = productsData.find(product => product.id === id)

    if (!product) {
        return <span>Product not found</span>
    }

    return <ProductPage product={product} from={from} />
}