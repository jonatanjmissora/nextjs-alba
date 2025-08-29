import { aboutDiplomas } from "@/_lib/about"
import Image from "next/image"

export default function Certificates() {
	return (
		<div className="w-full flex flex-wrap justify-center items-center gap-4 pb-20">
			{aboutDiplomas.map(diploma => (
				<div
					key={diploma.title}
					className="relative w-full aspect-[10/7] sm:w-[240px] 2xl:w-[340px] rounded-lg overflow-hidden sm:hover:scale-150 transition-all duration-300 hover:z-10"
				>
					<Image
						src={diploma.image}
						alt={diploma.title}
						quality={90}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
			))}
		</div>
	)
}
