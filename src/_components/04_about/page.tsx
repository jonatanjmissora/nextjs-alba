import { SectionHeader } from "../section-header"
import { aboutHeader } from "@/_lib/about"
import { LeafImgs } from "../leaf-section"
import { Image as ImageKit } from "@imagekit/next"
import "./about.css"

export default function About() {
	return (
		<section className="w-full bg-(--background-two) relative sm:pt-10 2xl:pt-20 sm:pb-50 2xl:pb-80 px-(--sm-layout-padding) 2xl:px-(--2xl-layout-padding)">
			<article id="about01" className="w-full my-32 border border-transparent">
				<SectionHeader title="Mi historia" description={aboutHeader} />
				<Signature />
				<Testimonials />
				<Certificates />
			</article>
			<LeafImgs />
		</section>
	)
}

const Signature = () => {
	return (
		<div className="w-full h-40 relative">
			<p className="bonheur text-(--primary-green) sm:text-[12rem] 2xl:text-[17rem] text-center opacity-10 leading-68 absolute sm:-top-48 2xl:-top-64 left-0 w-full">
				Albana Garcia
			</p>
		</div>
	)
}

const Testimonials = () => {
	const urlEndp = "https://ik.imagekit.io/jjmissora/Alba"
	const testimonials = [
		"about/testimonial01.webp",
		"about/testimonial02.webp",
		"about/testimonial03.webp",
		"about/testimonial04.webp",
		"about/testimonial06.webp",
		"about/testimonial07.webp",
		"about/testimonial05.webp",
	]
	return (
		<article className="w-full px-(--sm-layout-padding) 2xl:px-(--2xl-layout-padding)">
			<div className="flex w-full justify-center">
				<div className="sm:w-[300px] sm:h-[450px] 2xl:w-[400px] 2xl:h-[600px] relative testimonialImageReveal">
					<ImageKit
						urlEndpoint={`${urlEndp}`}
						src="/about/about-alba1.webp"
						priority={false}
						alt={"/about/about-alba1.webp"}
						fill
						loading="lazy"
						className={`object-cover`}
						sizes="(max-width: 768px) 33vw, (max-width: 1200px) 40vw, 50vw"
					/>
				</div>
				<div className="sm:w-[300px] sm:h-[450px] 2xl:w-[400px] 2xl:h-[600px] relative testimonialImageReveal">
					<ImageKit
						urlEndpoint={`${urlEndp}`}
						src="/about/about-alba3.webp"
						priority={false}
						alt={"/about/about-alba3.webp"}
						fill
						loading="lazy"
						className={`object-cover`}
						sizes="(max-width: 768px) 33vw, (max-width: 1200px) 40vw, 50vw"
					/>
				</div>
			</div>
			<div className="w-[450px] mx-auto mt-10 h-[124px] relative overflow-hidden testimonial-container opacity-70">
				<div className="absolute top-full left-1/2 -translate-x-1/2 flex flex-col gap-6 testimonials1 w-full">
					{testimonials.map(testimonial => (
						<div
							key={testimonial}
							className={`mx-auto ${testimonial === "about/testimonial05.webp" ? "sm:w-[250px] 2xl:w-[300px]" : "sm:w-[300] 2xl:w-[400px]"} sm:h-[80px] 2xl:h-[100px] relative`}
						>
							<ImageKit
								urlEndpoint={`${urlEndp}`}
								src={testimonial}
								priority={false}
								alt={testimonial}
								fill
								loading="lazy"
								className={`object-cover`}
								sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 20vw"
							/>
						</div>
					))}
				</div>
				<div className="absolute top-full left-1/2 -translate-x-1/2 flex flex-col gap-6 testimonials2">
					{testimonials.map(testimonial => (
						<div
							key={testimonial}
							className={`mx-auto ${testimonial === "about/testimonial08.webp" ? "w-[300px]" : "w-[400px]"} h-[100px] relative`}
						>
							<ImageKit
								urlEndpoint={`${urlEndp}`}
								src={testimonial}
								priority={false}
								alt={testimonial}
								fill
								loading="lazy"
								className={`object-cover`}
								sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 20vw"
							/>
						</div>
					))}
				</div>
			</div>
		</article>
	)
}

const Certificates = () => {
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
		<article className="flex gap-12 items-end justify-center w-full py-20">
			<div className="sm:w-[170px] sm:h-[350px] 2xl:w-[200px] 2xl:h-[400px] relative">
				<ImageKit
					urlEndpoint={`${urlEndp}`}
					src="/about/about-alba2.webp"
					priority={false}
					alt={"/about/about-alba2.webp"}
					fill
					loading="lazy"
					className={`object-cover`}
					sizes="(max-width: 768px) 33vw, (max-width: 1200px) 40vw, 50vw"
				/>
			</div>

			<div className="grid grid-cols-4 gap-4">
				{certificados.map(certificado => (
					<div
						key={certificado}
						className="sm:w-[180px] sm:h-[120px] 2xl:w-[200px] 2xl:h-[150px] relative certificatesImageReveal"
					>
						<ImageKit
							urlEndpoint={`${urlEndp}`}
							src={certificado}
							priority={false}
							alt={certificado}
							fill
							loading="lazy"
							className={`object-cover`}
							sizes="(max-width: 768px) 33vw, (max-width: 1200px) 40vw, 50vw"
						/>
					</div>
				))}
			</div>
		</article>
	)
}
