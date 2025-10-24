import BranchLeafMovil from "../../../public/leaf/branch-leaf-movil"
import Leaf1 from "../../../public/leaf/leaf1"
import Leaf2Movil from "../../../public/leaf/leaf2-movil"
import { ImageKit } from "../image-kit"

export default function MovilHome() {
	return (
		<section className="w-full flex justify-center items-start relative px-6">
			<LeafImgs />
			<div
				id="home"
				className="w-full h-[1100px] flex flex-col items-center gap-3 pt-[180px]"
			>
				<span className="title text-[var(--primary-green)] text-center">
					SKIN AND BEAUTY CENTER
				</span>
				<span className="subtitle">in Bahia Blanca</span>
				<p className="text">Lorem ipsum dolor sit amet consectetur.</p>
				<a
					href="https://alba-estetica-turnos.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
					className="cta-button text mt-4 py-4 px-8"
				>
					Reserva tu turno
				</a>
			</div>
			<div className="absolute right-0 bottom-[200px] -z-10 bg-[var(--primary-pink)] rounded-tl-[45%]">
				<HomeImg2 />
			</div>
			<div className="absolute -z-5 bottom-[0] left-0 w-full h-[230px] bg-[var(--primary-pink)]"></div>
		</section>
	)
}

const HomeImg2 = () => {
	return (
		<div className="w-[350px] h-[450px] relative">
			<ImageKit imageID="alba-alpha.png" priority={true} />
		</div>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeafMovil className="absolute top-0 right-[19%] size-[13rem] rotate-x-180 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
			<Leaf1 className="absolute top-[30%] left-[65%] size-[3rem] text-[var(--leaf-color)]" />
			<Leaf2Movil className="absolute bottom-[5%] -left-[5%] size-[8rem] text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
		</>
	)
}
