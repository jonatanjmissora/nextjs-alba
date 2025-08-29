export default function WaveContainer({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="relative w-full px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] my-20 border border-transparent">
			<WaveSVG className="absolute bottom-[62.5%] left-0 -z-10" />

			{children}

			<WaveSVG className="absolute top-[62.5%] left-0 rotate-180 -z-10" />
		</div>
	)
}

const WaveSVG = ({ className }: { className: string }) => {
	return (
		<svg
			width="100%"
			height="100%"
			id="svg"
			viewBox="0 0 1440 390"
			className={className}
		>
			<title>WaveSVG</title>
			<path
				d="M 0,400 L 0,150 C 127.67857142857142,180.07142857142856 255.35714285714283,210.14285714285714 368,224 C 480.64285714285717,237.85714285714286 578.2500000000001,235.49999999999997 707,215 C 835.7499999999999,194.50000000000003 995.6428571428571,155.85714285714286 1123,142 C 1250.357142857143,128.14285714285714 1345.1785714285716,139.07142857142856 1440,150 L 1440,400 L 0,400 Z"
				stroke="none"
				strokeWidth="0"
				fill="var(--primary-pink)"
				fillOpacity="1"
			></path>
		</svg>
	)
}
