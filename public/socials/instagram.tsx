export const Instagram = ({ className }: { className: string }) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: no quiero poner un titulo
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`${className} icon`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
			<path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
			<path d="M16.5 7.5v.01" />
		</svg>
	)
}
