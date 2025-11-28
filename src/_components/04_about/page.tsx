import { SectionHeader } from "../section-header"
// import Testimonials from "./testimonials"
import Certificates from "./certificates"
import { aboutHeader } from "@/_lib/about"
import { LeafImgs } from "../leaf-section"
import { Image as ImageKit } from "@imagekit/next"

export default function About() {
	return (
		<section className="w-full bg-(--background-two) relative pt-20 pb-80 px-(--sm-layout-padding) 2xl:px-(--2xl-layout-padding)">
			<article id="about01" className="w-full my-32 border border-transparent">
				<SectionHeader
					title="Mi historia"
					subtitle="Acerca de"
					description={aboutHeader}
				/>
				<Signature />
				<Testimonials />
				{/* <Certificates /> */}
			</article>
			<LeafImgs />
		</section>
	)
}

const Signature = () => {
	return (
		<div className="w-full h-40 relative">
			<p className="bonheur text-(--primary-green) text-[280px] text-center opacity-10 leading-[280px] absolute -top-[250px] left-0 w-full">
				Albana Garcia
			</p>
		</div>
	)
}

const Testimonials = () => {
	const urlEndp = "https://ik.imagekit.io/jjmissora/Alba"
	return (
		<article className="">
			<div className="flex w-full justify-center">
				<div className="w-[400px] h-[600px] relative">
					<ImageKit
						urlEndpoint={`${urlEndp}`}
						src="/about/testimonial-photo1.webp"
						priority={true}
						alt={"/about/testimonial-photo1.webp"}
						fill
						loading="eager"
						className={`object-cover -rotate-12`}
						sizes="(max-width: 768px) 33vw, (max-width: 1200px) 40vw, 50vw"
					/>
				</div>
				<div className="w-[400px] h-[600px] relative">
					<ImageKit
						urlEndpoint={`${urlEndp}`}
						src="/about/testimonial-photo2.webp"
						priority={true}
						alt={"/about/testimonial-photo2.webp"}
						fill
						loading="eager"
						className={`object-cover rotate-12`}
						sizes="(max-width: 768px) 33vw, (max-width: 1200px) 40vw, 50vw"
					/>
				</div>
			</div>
			<div className="w-full mt-10">
				<div className="mx-auto w-[400px] h-[100px] relative">
					<ImageKit
						urlEndpoint={`${urlEndp}`}
						src="/about/testimonial06w.jpg"
						priority={true}
						alt={"/about/testimonial06w.jpg"}
						fill
						loading="eager"
						className={`object-cover`}
						sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 20vw"
					/>
				</div>
			</div>
		</article>
	)
}
