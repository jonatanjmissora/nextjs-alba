import Leaf1 from "../../public/leaf/leaf1"
import RoundLeafMovil from "../../public/leaf/round-leaf-movil"

export const SectionHeader = ({
	title,
	subtitle,
	description,
}: {
	title: string
	subtitle: string
	description: string
}) => {
	return (
		<div className="flex flex-col items-center justify-center gap-3 pb-10 mb-32 mt-14 min-h-[16dvh] relative">
			<LeafImages />
			<h2 className="subtitle text-pretty text-[var(--foreground-green)]">
				{title}
			</h2>
			<div className="text text-balance pt-4 text-center">
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
			<RoundLeafMovil className="sm:hidden block absolute top-[0%] -right-[2%] sm:-right-[1%] size-[6rem] sm:size-[8rem] 2xl:size-[10rem] rotate-0 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
			<Leaf1 className="hidden sm:block absolute bottom-[0%] -right-[2%] sm:-right-[1%] size-[6rem] sm:size-[8rem] 2xl:size-[7rem] rotate-90 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
		</>
	)
}
