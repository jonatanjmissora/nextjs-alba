import { SectionHeader } from "../section-header"
import { productsHeader } from "@/_lib/constant"
import type { ElementsTreeType } from "@/_lib/types"
import { productsTree } from "@/_lib/products-mock"
import { Card } from "../elements/card"
import { LeafImgs } from "../leaf-section"
import { Image as ImageKit } from "@imagekit/next"

export default function ProductsSection() {
	return (
		<section className="w-full px-(--sm-layout-padding) 2xl:px-(--2xl-layout-padding) sm:pt-10 2xl:pt-20 sm:pb-110 2xl:pb-160 relative bg-(--background-one)">
			<article id="shop01" className="w-full my-32 border border-transparent">
				<SectionHeader
					title="Nuestros productos en gabinete"
					description={productsHeader}
				/>

				<ProductCategoriesComponent />
			</article>
			<LeafImgs />
			<BgImage />
		</section>
	)
}

const ProductCategoriesComponent = () => {
	return (
		<div className="flex flex-wrap sm:gap-x-4 2xl:gap-x-6 sm:gap-y-8 2xl:gap-y-12 w-full">
			{productsTree.map((category: ElementsTreeType) => (
				<Card key={category.title} type="shop" category={category} />
			))}
		</div>
	)
}

const BgImage = () => {
	const urlEndp = "https://ik.imagekit.io/jjmissora/Alba"

	return (
		<div className="absolute bottom-0 -right-50 z-1">
			<div className="w-[60dvw] h-[70dvh] relative">
				<ImageKit
					urlEndpoint={`${urlEndp}`}
					src="/Layout/products-bg.webp"
					priority={false}
					alt={"/Layout/products-bg.webp"}
					fill
					loading="lazy"
					className={`object-cover opacity-75`}
					sizes="(max-width: 768px) 33vw, (max-width: 1200px) 60vw, 100vw"
				/>
			</div>
		</div>
	)
}
