import Image from "next/image"

export default function Certificates() {
	return (
		<div className="w-full flex flex-wrap justify-center items-center gap-4 pb-20">
			<div className="relative w-full h-[200px] sm:w-[240px] sm:h-[160px] 2xl:w-[340px] 2xl:h-[200px] rounded-lg overflow-hidden sm:hover:scale-150 transition-all duration-300 hover:z-10">
				<Image
					src="/testimonials/certificate1.jpg"
					alt="certificate1"
					quality={100}
					fill
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<div className="relative w-full h-[200px] sm:w-[240px] sm:h-[160px] 2xl:w-[340px] 2xl:h-[200px] rounded-lg overflow-hidden sm:hover:scale-150 transition-all duration-300 hover:z-10">
				<Image
					src="/testimonials/certificate2.jpg"
					alt="certificate2"
					quality={100}
					fill
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<div className="relative w-full h-[200px] sm:w-[240px] sm:h-[160px] 2xl:w-[340px] 2xl:h-[200px] rounded-lg sm:hover:scale-150 transition-all duration-300 hover:z-10">
				<Image
					src="/testimonials/certificate3.jpg"
					alt="certificate3"
					quality={100}
					fill
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<div className="relative w-full h-[200px] sm:w-[240px] sm:h-[160px] 2xl:w-[340px] 2xl:h-[200px] rounded-lg sm:hover:scale-150 transition-all duration-300 hover:z-10">
				<Image
					src="/testimonials/certificate4.jpg"
					alt="certificate4"
					quality={100}
					fill
					style={{ objectFit: 'cover' }}
				/>
			</div>
		</div>
	)
}
