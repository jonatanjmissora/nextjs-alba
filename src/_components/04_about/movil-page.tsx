"use client"
import { SectionHeader } from "../section-header"
import { aboutHeader } from "@/_lib/about"
import { MovilLeafImgs } from "../layout/movil/movil-leaf-imgs"
// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselItem,
// 	CarouselNext,
// 	CarouselPrevious,
// } from "@/components/ui/carousel"
// import { useEffect, useState } from "react"
// import { ImageKit } from "../image-kit"
import { Image as ImageKit2 } from "@imagekit/next"

export default function MovilAbout() {
	return (
		<section className="w-full bg-(--primary-pink) flex justify-center items-start relative pb-[300px]">
			<MovilLeafImgs />
			<div
				id="about"
				className="w-full flex flex-col gap-12 relative px-6 bg-(--primary-pink) pt-12"
			>
				<SectionHeader title="Mi historia" description={aboutHeader} />

				<Signature />

				<div>
					<MovilImgBackground />
					{/* <MovilTestimonials /> */}
				</div>
				<MovilCertificates2 />
			</div>
		</section>
	)
}

const Signature = () => {
	return (
		<div className="w-full h-0 relative">
			<p className="bonheur text-(--primary-green) text-[4.5rem] text-center opacity-20 leading-none absolute -top-16 left-0 w-full">
				Albana Garcia
			</p>
		</div>
	)
}

const MovilImgBackground = () => {
	const urlEndp = "https://ik.imagekit.io/jjmissora/Alba"
	return (
		<div className="relative w-full h-[320px] overflow-hidden">
			<div className="absolute -top-20 -right-16">
				<div className="w-[300px] h-[400px] relative">
					<ImageKit2
						urlEndpoint={`${urlEndp}`}
						src="/about/about-alba3.webp"
						priority={false}
						alt={"/about/about-alba3.webp"}
						fill
						loading="lazy"
						className={`object-cover`}
						sizes="(max-width: 768px) 100vw"
					/>
				</div>
			</div>
			<div className="absolute -bottom-20 left-0">
				<div className="w-[250px] h-[300px] relative">
					<ImageKit2
						urlEndpoint={`${urlEndp}`}
						src="/about/about-alba1.webp"
						priority={false}
						alt={"/about/about-alba1.webp"}
						fill
						loading="lazy"
						className={`object-cover`}
						sizes="(max-width: 768px) 100vw"
					/>
				</div>
			</div>
		</div>
	)
}

// const MovilCertificates = () => {
// 	const urlEndp = "https://ik.imagekit.io/jjmissora/Alba"
// 	const certificados = [
// 		"/about/certificado00.webp",
// 		"/about/certificado01.webp",
// 		"/about/certificado02.webp",
// 		"/about/certificado03.webp",
// 		"/about/certificado04.webp",
// 		"/about/certificado05.webp",
// 		"/about/certificado06.webp",
// 	]
// 	return (
// 		<Carousel className="w-[70dvw] mx-auto relative z-10">
// 			<CarouselContent className="">
// 				{certificados.map(diploma => (
// 					<CarouselItem key={diploma}>
// 						<div className="relative w-full h-[200px] custom-shadow rounded-lg overflow-hidden ">
// 							<ImageKit2
// 								urlEndpoint={`${urlEndp}`}
// 								src={diploma}
// 								priority={false}
// 								alt={diploma}
// 								fill
// 								loading="lazy"
// 								className={`object-cover`}
// 								sizes="(max-width: 768px) 100vw"
// 							/>
// 						</div>
// 					</CarouselItem>
// 				))}
// 			</CarouselContent>
// 			<CarouselPrevious />
// 			<CarouselNext />
// 		</Carousel>
// 	)
// }

const MovilCertificates2 = () => {
	const urlEndp = "https://ik.imagekit.io/jjmissora/Alba"
	const certificados = [
		"/about/certificado00.webp",
		"/about/certificado01.webp",
		"/about/certificado02.webp",
		"/about/certificado03.webp",
		"/about/certificado04.webp",
		"/about/certificado05.webp",
		"/about/certificado06.webp",
	]
	return (
		<div className="w-full relative certificados-container opacity-70">
			<div className="flex gap-1 certificados1 w-full absolute top-0">
				{certificados.map(testimonial => (
					<div key={testimonial} className={`min-w-[150px] h-[100px] relative`}>
						<ImageKit2
							urlEndpoint={`${urlEndp}`}
							src={testimonial}
							priority={false}
							alt={testimonial}
							fill
							loading="lazy"
							className={`object-cover`}
							sizes="(max-width: 768px) 100vw"
						/>
					</div>
				))}
			</div>
			<div className="flex gap-1 certificados2 w-full absolute top-0">
				{certificados.map(testimonial => (
					<div key={testimonial} className={`min-w-[150px] h-[100px] relative`}>
						<ImageKit2
							urlEndpoint={`${urlEndp}`}
							src={testimonial}
							priority={false}
							alt={testimonial}
							fill
							loading="lazy"
							className={`object-cover`}
							sizes="(max-width: 768px) 100vw"
						/>
					</div>
				))}
			</div>
		</div>
	)
}

// const MovilTestimonials = () => {
// 	const [actual, setActual] = useState(5)

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			actual === 1 ? setActual(5) : setActual(actual => actual - 1)
// 		}, 5000)
// 		return () => clearInterval(interval)
// 	}, [actual])

// 	return (
// 		<article className="w-full h-[200px] relative flex items-center">
// 			<ImageElement
// 				src="/about/testimonial01.webp"
// 				className={`w-[310px] h-[70px] top-0 -left-5 absolute blur-[2px] z-0 ${actual === 1 && "blur-none z-10 duration-500"}`}
// 			/>
// 			<ImageElement
// 				src="/about/testimonial02.webp"
// 				className={`w-[310px] h-[70px] top-[35px] left-[0%] absolute blur-[2px] z-0 ${actual === 2 && "blur-none z-10 duration-500"}`}
// 			/>
// 			<ImageElement
// 				src="/about/testimonial03.webp"
// 				className={`w-[310px] h-[70px] top-[70px] left-[5%] absolute blur-[2px] z-0 ${actual === 3 && "blur-none z-10 duration-500"}`}
// 			/>
// 			<ImageElement
// 				src="/about/testimonial04.webp"
// 				className={`w-[310px] h-[70px] top-[105px] left-[10%] absolute blur-[2px] z-0 ${actual === 4 && "blur-none z-10 duration-500"}`}
// 			/>
// 			<ImageElement
// 				src="/about/testimonial06.webp"
// 				className={`w-[310px] h-[70px] top-[140px] left-[15%] absolute blur-[2px] z-0 ${actual === 5 && "blur-none z-10 duration-500"}`}
// 			/>
// 		</article>
// 	)
// }

// const ImageElement = ({
// 	src,
// 	className,
// }: {
// 	src: string
// 	className: string
// }) => {
// 	return (
// 		<div className={`rounded-lg custom-shadow ${className} overflow-hidden`}>
// 			<div className="relative w-full h-full">
// 				<ImageKit imageID={src} />
// 			</div>
// 		</div>
// 	)
// }
