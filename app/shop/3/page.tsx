import { Product, productsData } from "@/app/_lib/products"
import { ArrowLeft, Heart, MinusCircle, PlusCircle, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ProductCountAndCart } from "../product-count"

export default function Product3Page() {

    const product = productsData[2]

  return (
    <div className="w-full h-screen px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] flex flex-col">
            <ProductHeader />
            {product ? (
                <ProductBody product={product}/>
            ) : (
                <span>Product not found</span>
            )}
            <ProductFooter />
        </div>
  )
}

const ProductHeader = () => {
    return (
        <div className="w-full h-[10dvh] border-b-2 border-[var(--secondary-green)] flex flex-col justify-end group">
            <Link href="/#shop" className="py-4 flex items-center gap-6 cursor-pointer">
                <ArrowLeft size={24} color="var(--primary-green)" className="icon"/>
                <span className="header text-[var(--primary-green)] icon">Volver</span>
            </Link>
        </div>
    )
}

const ProductBody = ({product}: {product: Product}) => {
    return (
        <div className="w-full flex-1 flex gap-12 justify-center items-center py-20">
            <div className="w-1/2 h-full flex flex-col gap-2">
                <div className="w-full h-full overflow-hidden relative rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
                    <Image src={product.image} alt={product.title} quality={100} layout="fill" objectFit="cover" className="" />
                </div>
                <div className="flex gap-2">
                    <Carrousel product={product}/>
                </div>
            </div>
            <div className="w-1/2 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <span className="header text-[var(--primary-green)]">Categoria</span>
                    <Heart
                        size={30}
                        color="var(--primary-green)"
                        className="icon"
                    />
                            
                </div>
                <h1 className="title font-bold">Product Header</h1>
                <p className="text">{product.description}</p>
                <ProductCountAndCart product={product}/>

            </div>
        </div>
    )
}

const ProductFooter = () => {
    return (
        <div className="w-full border-t-2 border-[var(--primary-green)]">
            <p className="py-2 text-sm text-[var(--primary-green)]">
                © 2025 ALBA
            </p>
        </div>
    )
}

const Carrousel = ({product}: {product: Product}) => {
    return (
        <div className="flex gap-2">
            <div className="w-[70px] h-[70px] overflow-hidden relative rounded-tl-[1rem] rounded-br-[1rem] shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
                <Image src={product.image} alt={product.title} quality={100} layout="fill" objectFit="cover" className="" />
            </div>
            <div className="w-[70px] h-[70px] overflow-hidden relative rounded-tl-[1rem] rounded-br-[1rem] shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
                <Image src={product.image} alt={product.title} quality={100} layout="fill" objectFit="cover" className="" />
            </div>
            <div className="w-[70px] h-[70px] overflow-hidden relative rounded-tl-[1rem] rounded-br-[1rem] shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
                <Image src={product.image} alt={product.title} quality={100} layout="fill" objectFit="cover" className="" />
            </div>
            <div className="w-[70px] h-[70px] overflow-hidden relative rounded-tl-[1rem] rounded-br-[1rem] shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
                <Image src={product.image} alt={product.title} quality={100} layout="fill" objectFit="cover" className="" />
            </div>
        </div>
    )
}