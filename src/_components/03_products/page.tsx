import Leaf1 from "../../../public/leaf/leaf1"
import Leaf2 from "../../../public/leaf/leaf2"
import { SectionHeader } from "../section-header"
import BranchLeaf from "../../../public/leaf/branch-leaf"
import { productsHeader } from "@/_lib/products"
import type { ProductsTreeType } from "@/_lib/types"
import Image from "next/image"
import Link from "next/link"
import { setUrlCategoryName } from "@/_lib/utils"
import { productsTree } from "@/_lib/products-mock"

export default function ProductsSection() {
	return (
		<section
			id="products"
			className="w-full my-32 relative border border-transparent"
		>
			<LeafImgs />

			<SectionHeader
				title="Nuestros productos en gabinete"
				subtitle="Productos"
				description={productsHeader}
			/>

			<ProductCategoriesComponent />
		</section>
	)
}

const ProductCategoriesComponent = () => {
	return (
		<div className="flex flex-wrap gap-6 w-full">
			{productsTree.map((category: ProductsTreeType) => (
				<CategoryCard key={category.title} category={category} />
			))}
		</div>
	)
}

const CategoryCard = ({ category }: { category: ProductsTreeType }) => {
	const urlCategoryName = setUrlCategoryName(category.title)

	return (
		<div className="min-w-[30%] flex-1 flex flex-wrap justify-start items-start bg-pink-100 shadow-[3px_3px_5px_0px_rgba(0,0,0,0.25)] border border-[#444]/20 rounded-lg overflow-hidden relative">
			<div className="w-[100%] max-w-[37dvw] h-[300px] bg-slate-300 shadow-[0px_3px_5px_0px_rgba(0,0,0,0.25)] relative overflow-hidden">
				<Image
					src={category.categories[0].images.split("*")[0]}
					alt={category.title}
					priority
					fill
					className="object-cover hover:scale-110 duration-300"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<div className="flex flex-col justify-between gap-2 p-3 pt-5 w-full flex-1">
				<h2 className="tracking-wider font-semibold text-lg w-full text-left">
					{category.title}
				</h2>
				<div className="flex flex-col justify-between flex-1 gap-2 p-2 w-full">
					<span className="text-sm">{category.categories[0].description}</span>
					<Link
						href={`/services/${urlCategoryName}`}
						className="text-[#444]/70 cursor-pointer text-xs w-full text-right absolute bottom-3 right-3"
					>
						leer mas +
					</Link>
				</div>
			</div>
		</div>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute -bottom-[30%] -left-[18%] size-[20rem] 2xl:size-[25rem] rotate-90 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
			<Leaf1 className="absolute -bottom-[10%] 2xl:-bottom-[5%] left-[47%] size-[5rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute -bottom-[25%] -right-[5%] size-[7rem] 2xl:size-[10rem] text-[var(--leaf-color)]" />
		</>
	)
}
