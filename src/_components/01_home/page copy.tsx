import BranchLeaf from "../../../public/leaf/branch-leaf"
import Leaf1 from "../../../public/leaf/leaf1"
import Leaf2 from "../../../public/leaf/leaf2"
import RoundLeaf from "../../../public/leaf/round-leaf"
import { ImageKit } from "../image-kit"
// import { Image as ImageKit } from "@imagekit/next"

export default function Home() {
	return (
		<>
			<LeafImgs />

			<div className="absolute top-0 left-0 -z-10 bg-(--primary-pink) pt-24 pl-32 2xl:pr-40 pr-12 rounded-br-[45%] overflow-hidden">
				<HomeImg1 />
			</div>

			<div className="w-1/4 flex flex-col items-center justify-center gap-3 text-pretty">
				<span className="title text-[var(--primary-green)] text-center">
					Skin and Beauty Center
				</span>
				<span className="subtitle ">en Bahia Blanca</span>
				<p className="text">Lorem ipsum dolor sit amet consectetur.</p>
				<a
					href="https://alba-estetica-turnos.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
					className="cta-button btn-text text-center mt-4 py-4 px-8"
				>
					RESERVA TU TURNO
				</a>
			</div>

			<div className="flex gap-10 absolute bottom-12 left-1/2 -translate-x-[60%]">
				<div className="text-lg px-4 py-2 pt-1 rounded-tl-[1rem] rounded-br-[1rem] border border-[var(--primary-pink)] shadow-[3px_3px_5px_0px_rgba(0,0,0,0.25)] bg-[var(--primary-pink)]">
					<span className="text-2xl text-[var(--primary-green)]">+4</span> años
					de experiencia
				</div>
				<div className="text-lg px-4 py-2 pt-1 rounded-tl-[1rem] rounded-br-[1rem] border border-[var(--primary-pink)] shadow-[3px_3px_5px_0px_rgba(0,0,0,0.25)] bg-[var(--primary-pink)]">
					<span className="text-2xl text-[var(--primary-green)]">+100</span>{" "}
					clientas atendidas
				</div>
				<div className="text-lg px-4 py-2 pt-1 rounded-tl-[1rem] rounded-br-[1rem] border border-[var(--primary-pink)] shadow-[3px_3px_5px_0px_rgba(0,0,0,0.25)] bg-[var(--primary-pink)]">
					<span className="text-2xl text-[var(--primary-green)]">99.9%</span>{" "}
					clientas satisfechas
				</div>
			</div>

			<div className="absolute right-[0dvw] bottom-0 2xl:bottom-[0dvh] 2xl:right-[0dvw] -z-10 bg-[var(--primary-pink)] rounded-tl-[45%] pt-12">
				<HomeImg2 />
			</div>
		</>
	)
}

const HomeImg1 = () => {
	return (
		<div className="w-[200px] h-[300px] 2xl:w-[250px] 2xl:h-[400px] 2xl:translate-x-24 relative">
			<ImageKit imageID="avatar-alba.png" priority={true} />
		</div>
	)
}

const HomeImg2 = () => {
	return (
		<div className="w-[350px] h-[450px] 2xl:w-[500px] 2xl:h-[700px] relative">
			<ImageKit imageID="alba-alpha.png" priority={true} />
		</div>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute top-0 right-[19%] size-[16rem] 2xl:size-[20rem] rotate-x-180 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
			<Leaf1 className="absolute top-[43%] 2xl:top-[45%] left-[55%] size-[4rem] 2xl:size-[5rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute -bottom-[0%] 2xl:bottom-[10%] right-[30%] size-[6rem] 2xl:size-[10rem] rotate-180 text-[var(--leaf-color)]" />
			<RoundLeaf className="absolute bottom-[22%] sm:bottom-[25%] 2xl:bottom-[35%] -left-[2%] size-[9rem] 2xl:size-[14rem] rotate-180 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
		</>
	)
}
