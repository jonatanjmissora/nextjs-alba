import Image from "next/image"

export default function MovilHome() {
	return (
		<>
			<div
				id="home"
				className="w-full h-[115dvh] flex flex-col gap-3 pt-[25dvh]"
			>
				<span className="title text-[var(--primary-green)]">
					SKIN AND BEAUTY CENTER
				</span>
				<span className="subtitle">in Bahia Blanca</span>
				<p className="text">Lorem ipsum dolor sit amet consectetur.</p>
				<button className="cta-button text mt-4 py-4 px-8">
					Reserva tu turno
				</button>
			</div>
			<div className="absolute right-0 bottom-0 -z-10 bg-[var(--primary-pink)] rounded-tl-[45%]">
				<HomeImg2 />
			</div>
		</>
	)
}

const HomeImg2 = () => {
	return (
		<div className="w-[350px] h-[450px] relative">
			<Image
				src="/alba-alpha.png"
				alt="Alba Alpha Logo"
				quality={100}
				layout="fill"
				objectFit="cover"
			/>
		</div>
	)
}
