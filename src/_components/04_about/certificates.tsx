import Image from "next/image"

export default function Certificates() {
	const certificatesData = [
		{ src: "/testimonials/certificate1.jpg", alt: "certificate1" },
		{ src: "/testimonials/certificate2.jpg", alt: "certificate2" },
		{ src: "/testimonials/certificate3.jpg", alt: "certificate3" },
		{ src: "/testimonials/certificate4.jpg", alt: "certificate4" },
	]

	return (
		<div className="w-full flex flex-wrap justify-center items-center gap-4 pb-20">
			{certificatesData.map(certificate => (
				<div
					key={certificate.alt}
					className="relative w-full h-[200px] sm:w-[240px] sm:h-[160px] 2xl:w-[340px] 2xl:h-[200px] rounded-lg overflow-hidden sm:hover:scale-150 transition-all duration-300 hover:z-10"
				>
					<Image
						src={certificate.src}
						alt={certificate.alt}
						quality={100}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
			))}
		</div>
	)
}
