import { aboutDiplomas } from "@/_lib/about"
import { ImageKit } from "../image-kit"

export default function Certificates() {
	return (
		<div className="w-full flex flex-wrap justify-center items-center gap-4 pb-20">
			{aboutDiplomas.map(diploma => (
				<div
					key={diploma.title}
					className="relative w-full aspect-[10/7] sm:w-[240px] 2xl:w-[340px] rounded-lg overflow-hidden sm:hover:scale-150 transition-all duration-300 hover:z-10"
				>
					<ImageKit imageID={diploma.image} />
				</div>
			))}
		</div>
	)
}
