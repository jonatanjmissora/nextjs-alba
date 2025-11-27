"use client"
import { SectionHeader } from "../section-header"
import { aboutDiplomas, aboutHeader } from "@/_lib/about"
import { MovilLeafImgs } from "../layout/movil/movil-leaf-imgs"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import { ImageKit } from "../image-kit"

export default function MovilAbout() {
	return (
		<section className="w-full bg-[var(--primary-pink)] flex justify-center items-start relative pb-[300px]">
			<MovilLeafImgs />
			<div
				id="about"
				className="w-full relative px-6 bg-[var(--primary-pink)] pt-12"
			>
				<SectionHeader
					title="Mi historia"
					subtitle="Acerca de"
					description={aboutHeader}
				/>

				<MovilCertificates />
				<MovilTestimonials />
			</div>
		</section>
	)
}

const MovilCertificates = () => {
	return (
		<Carousel className="w-[70dvw] mx-auto relative z-10">
			<CarouselContent className="">
				{aboutDiplomas.map(diploma => (
					<CarouselItem key={diploma.title}>
						<div className="relative w-full h-[200px] custom-shadow rounded-lg overflow-hidden ">
							<ImageKit imageID={diploma.image} />
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}

const MovilTestimonials = () => {
	const [actual, setActual] = useState(5)

	useEffect(() => {
		const interval = setInterval(() => {
			actual === 1 ? setActual(5) : setActual(actual => actual - 1)
		}, 5000)
		return () => clearInterval(interval)
	}, [actual])

	return (
		<article className="w-full h-[80vh] relative flex items-center">
			<ImageElement
				src="/about/testimonial-photo2.webp"
				className={`w-full h-[400px] rotate-10 rounded top-0 absolute`}
			/>
			<ImageElement
				src="/about/testimonial04.png"
				className={`w-[310px] h-[80px] bottom-[34%] -left-5 absolute blur-[3px] z-0 ${actual === 1 && "blur-none z-10 duration-500"}`}
			/>
			<ImageElement
				src="/about/testimonial04.png"
				className={`w-[310px] h-[80px] bottom-[26%] left-[0%] absolute blur-[3px] z-0 ${actual === 2 && "blur-none z-10 duration-500"}`}
			/>
			<ImageElement
				src="/about/testimonial04.png"
				className={`w-[310px] h-[80px] bottom-[18%] left-[5%] absolute blur-[3px] z-0 ${actual === 3 && "blur-none z-10 duration-500"}`}
			/>
			<ImageElement
				src="/about/testimonial04.png"
				className={`w-[310px] h-[80px] bottom-[10%] left-[10%] absolute blur-[3px] z-0 ${actual === 4 && "blur-none z-10 duration-500"}`}
			/>
			<ImageElement
				src="/about/testimonial04.png"
				className={`w-[310px] h-[80px] bottom-[2%] left-[15%] absolute blur-[3px] z-0 ${actual === 5 && "blur-none z-10 duration-500"}`}
			/>
		</article>
	)
}

const ImageElement = ({
	src,
	className,
}: {
	src: string
	className: string
}) => {
	return (
		<div className={`rounded-lg custom-shadow ${className} overflow-hidden`}>
			<div className="relative w-full h-full">
				<ImageKit imageID={src} />
			</div>
		</div>
	)
}
