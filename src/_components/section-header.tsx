import Leaf1 from "../../public/leaf/leaf1"
import RoundLeafMovil from "../../public/leaf/round-leaf-movil"

export const SectionHeader = ({
	title,
	description,
}: {
	title: string
	description: string
}) => {
	return (
		<div className="flex flex-col items-center justify-center gap-3 pb-10 sm:mb-16 2xl:mb-32 mt-14 relative">
			<LeafImages />
			<h2 className="header text-pretty text-(--foreground-green)">{title}</h2>
			<div className=" subtitle text-balance pt-4 text-center">
				{description.split("\n\n").map(paragraph => (
					<p key={paragraph.substring(0, 30)}>{paragraph}</p>
				))}
			</div>
		</div>
	)
}

const LeafImages = () => {
	return (
		<>
			<RoundLeafMovil className="sm:hidden block absolute top-[0%] -right-[2%] sm:-right-[1%] size-24 sm:size-32 2xl:size-40 rotate-0 text-(--leaf-color) opacity-(--opacity-leaf)" />
			<Leaf1 className="hidden sm:block absolute bottom-1/2 right-0 size-24 sm:size-20 2xl:size-28 rotate-90 text-(--leaf-color) opacity-(--opacity-leaf)" />
		</>
	)
}
