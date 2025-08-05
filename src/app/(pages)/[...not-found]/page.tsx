import Link from "next/link"

export default function page() {
	return (
		<div className="flex-1 flex flex-col justify-center items-center gap-3 relative">
			<p className="text-[20rem] font-extrabold tracking-widest drop-shadow-[10px_10px_10px_#00000075] text-[var(--primary-green)] leading-none">
				404
			</p>

			<p className="text-[3rem] font-bold tracking-wide drop-shadow-[5px_5px_5px_#00000075]">
				Page Not Found
			</p>

			<Link className="cta-button py-2 px-6" href="/">
				Back
			</Link>

			<div className="absolute -bottom-[55%] left-0 right-0 -z-10 overflow-hidden">
				<WaveSVG className="" />
			</div>
		</div>
	)
}

const WaveSVG = ({ className }: { className: string }) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: no quiero poner un titulo
		<svg
			width="100%"
			height="100%"
			id="svg"
			viewBox="0 0 1440 390"
			className={className}
		>
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
