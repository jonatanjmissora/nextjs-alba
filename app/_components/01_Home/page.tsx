export default function Home() {
	return (
		<>
			<img
				src="./leaf/branch-leaf.svg"
				alt=""
				className="absolute top-0 right-[15%] size-[30rem] rotate-x-180"
			/>

			<img
				src="./leaf/round-leaf.svg"
				alt=""
				className="absolute bottom-[28%] -left-[5%] size-[18rem] rotate-180"
			/>

			<img
				src="./leaf/leaf1.svg"
				alt=""
				className="absolute bottom-[45%] left-[50%] size-[10rem] rotate-180"
			/>

			<img
				src="./leaf/leaf2.svg"
				alt=""
				className="absolute bottom-[0%] right-[30%] size-[15rem] rotate-180"
			/>

			<div className="absolute top-0 left-0 -z-10 bg-[var(--primary-pink)] pt-24 pl-32 2xl:pr-40 pr-12 rounded-br-[45%] overflow-hidden">
				{/** biome-ignore lint/performance/noImgElement: <explanation> */}
				<img
					src="./avatar-alba.png"
					alt=""
					className="w-[200px] h-[300px] 2xl:w-[300px] 2xl:h-[500px] 2xl:translate-x-8"
				/>
			</div>

			<div className="w-1/4 flex flex-col gap-3">
				<span className="text-4xl 2xl:text-6xl font-medium text-[var(--primary-green)]">
					SKIN AND BEAUTY
				</span>
				<span className="text-4xl 2xl:text-6xl font-medium text-[var(--primary-green)]">
					CENTER
				</span>
				<span className="text-2xl 2xl:text-xl mt-4">in Bahia Blanca</span>
				<p className="2xl:text-xl">Lorem ipsum dolor sit amet consectetur.</p>
				<button className="cta-button 2xl:text-xl mt-4 py-4 px-8">
					Reserva tu turno
				</button>
			</div>

			<div className="absolute bottom-[5dvh] -right-[5dvw] -z-10 bg-[var(--primary-pink)] rounded-tl-[45%] pt-12 2xl:right-[0dvw]">
				<img
					src="./alba-alpha.png"
					alt=""
					className="w-[400px] h-[500px] 2xl:w-[600px] 2xl:h-[800px]"
				/>
			</div>
		</>
	)
}
