import Link from "next/link"
import BranchLeafMovil from "../../../public/leaf/branch-leaf-movil"
import Leaf1 from "../../../public/leaf/leaf1"
import Leaf2Movil from "../../../public/leaf/leaf2-movil"
import { Image as ImageKit } from "@imagekit/next"

export default function MovilHome() {
	return (
		<section className="w-full flex justify-center items-start relative px-6 bg-(--background-one)">
			<LeafImgs />
			<div className="absolute z-0 -right-[30dvw] bottom-0 movil-bg">
				<HomeImg2 />
			</div>
			<div
				id="home"
				className="w-full h-[800px] flex flex-col items-center gap-6 pt-40 relative z-1"
			>
				<div className="hero-title">
					<p>Centro cosmiátrico</p>
					<p>de belleza</p>
				</div>
				<div>
					<p className="hero-subtitle w-full text-center">
						Al cuidado de tu piel.
					</p>
					<p className="hero-subtitle w-full text-center">
						Donde tu belleza se revela.
					</p>
				</div>
				<Link
					href="https://alba-estetica-turnos.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
					className="cta-button text-center mt-4"
				>
					RESERVA TU TURNO
				</Link>
			</div>
		</section>
	)
}

const HomeImg2 = () => {
	const urlEndp = "https://ik.imagekit.io/jjmissora/Alba"
	return (
		<div className="w-[180dvw] aspect-video relative">
			<ImageKit
				urlEndpoint={`${urlEndp}`}
				src="/Layout/hero-bg.webp"
				priority={true}
				alt={"/Layout/hero-bg.webp"}
				fill
				loading="eager"
				className={`object-cover`}
				sizes="(max-width: 768px) 100vw"
			/>
		</div>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeafMovil className="absolute top-0 right-[19%] size-52 rotate-x-180 text-(--primary-green) opacity-50" />
			<Leaf1 className="absolute top-[30%] left-[65%] size-12 text-(--primary-green)" />
			<Leaf2Movil className="absolute bottom-[5%] -left-[5%] size-32 text-(--primary-green) opacity-(--opacity-leaf)" />
		</>
	)
}
