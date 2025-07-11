import { BranchLeaf } from "@/public/leaf/branch-leaf"
import { Leaf1 } from "@/public/leaf/leaf1"
import Leaf2 from "@/public/leaf/leaf2"
import { SectionHeader } from "../section-header"

export default function page() {

	const tips = [
		{
			title: "Titulo del tip",
			img: "./tip1.jpg",
			description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
		},
		{
			title: "Titulo del tip",
			img: "./tip2.jpg",
			description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
		}
	]

	return (
		<>
			<div className="w-full h-[20dvh] bg-transparent"></div>
				<div id="faqs" className="w-full my-32 relative border border-transparent">
					<LeafImgs />
					<SectionHeader
						title="Nuestros tips del centro de belleza"
						subtitle="Tips"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
					/>
					<div className="w-full flex justify-between items-center pb-6">
						<div className="w-1/2 p-12 pl-0 flex flex-col gap-20">
							<div className="flex flex-col gap-3 tip-border-up pl-8 pt-8">
								<h3 className="w-full header font-semibold text-[var(--primary-green)]">
									{tips[0].title}
								</h3>
							<span className="w-full text text-balance">
								{tips[0].description}
							</span>
						</div>
						<img src={tips[0].img} alt="" className="w-full h-[70dvh] object-cover rounded-lg shadow-[5px_5px_7px_0_rgba(0,0,0,0.35)] relative z-50"/>
					</div>
					<div className="w-1/2 p-12 pr-0 flex flex-col gap-20">
						<img src={tips[1].img} alt="" className="w-full h-[70dvh] object-cover rounded-lg shadow-[5px_5px_7px_0_rgba(0,0,0,0.35)] relative z-50"/>
						<div className="flex flex-col gap-3 tip-border-down pr-8 pb-8">
							<h3 className="w-full header font-semibold text-[var(--primary-green)]">
								{tips[1].title}
							</h3>
							<span className="w-full text text-balance">
								{tips[1].description}
							</span>
						</div>
					</div>
				</div>
				<div className="w-full border-t-2 border-[var(--secondary-green)] text-right">
					<button className="header text-[var(--primary-green)] py-2 cursor-pointer icon">
						ver mas +
					</button>
				</div>
			</div>
		</>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute -z-10 -bottom-[25%] -left-40 size-[25rem] rotate-90 text-[var(--leaf-color)] opacity-50" />
			<Leaf1 className="absolute -z-10 -bottom-[10%] left-[47%] size-[7rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute -z-10 -bottom-[20%] -right-[5%] size-[10rem] text-[var(--leaf-color)]" />
		</>
	)
}
