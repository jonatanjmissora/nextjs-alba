import RoundLeaf from "../../public/leaf/round-leaf"

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
		<div className="flex flex-col items-start sm:items-end sm:flex-row gap-3 header-border pb-10 mb-20 mt-14 min-h-[16dvh] relative">
			<RoundLeaf className="absolute top-[0%] -right-[2%] sm:-right-[1%] size-[6rem] sm:size-[8rem] 2xl:size-[10rem] rotate-0 text-[var(--leaf-color)] opacity-50" />
			<div className="flex flex-col gap-2">
				<h3 className="w-full header text-[var(--primary-green)]">
					{subtitle}
				</h3>
				<h2 className="w-full text-3xl font-bold text-balance leading-12 sm:min-w-[370px]">
					{title}
				</h2>
			</div>
			<p className="text text-balance">{description}</p>
		</div>
	)
}
