export const MovilSectionHeader = ({
	title,
	subtitle,
	description,
}: {
	title: string
	subtitle: string
	description: string
}) => {
	return (
		<div className="header-border pb-10 mb-14 mt-14">
			<div className="flex flex-col gap-2">
				<h3 className="w-full header text-[var(--primary-green)]">
					{subtitle}
				</h3>
				<h2 className="w-full text-3xl font-bold text-balance leading-9">
					{title}
				</h2>
				<p className="text text-balance">{description}</p>
			</div>
		</div>
	)
}
