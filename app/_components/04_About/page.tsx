import { BranchLeaf } from "@/public/leaf/branch-leaf"
import { Leaf1 } from "@/public/leaf/leaf1"
import Leaf2 from "@/public/leaf/leaf2"
import RoundLeaf from "@/public/leaf/round-leaf"

export default function About() {
	return (
		<div className="w-full my-20 2xl:my-30 py-10 2xl:py-15 relative">
			<LeafImgs />
			<div className="flex gap-40 items-end header-border pb-10 mb-20 mt-20 relative min-h-44">
				<RoundLeaf className="absolute top-[0%] -right-[1%] size-[10rem] rotate-0 text-[var(--leaf-color)] opacity-50" />
				<div className="flex flex-col gap-3">
					<h3 className="w-full text-xl 2xl:text-2xl font-semibold text-[var(--primary-green)]">
						Acerca de
					</h3>
					<h2 className="w-max text-3xl 2xl:text-5xl font-bold">Mi historia</h2>
				</div>
				<p className="2xl:text-xl text-balance">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
					consectetur, adipisicing elit. Quidem, molestias! Sequi vel sed
					quaerat qui nihil molestias corporis laborum velit, temporibus, fugiat
					cumque, quos veritatis ea eos soluta beatae placeat.
				</p>
			</div>

			<div className="w-full h-[80dvh] relative pb-32">
				<ImageElement
					src="./testimonials/testimonial-photo1.jpg"
					alt="testimonial-photo1"
					className="w-[300px] h-[400px] 2xl:w-[400px] 2xl:h-[600px] top-[10%] left-[25%] 2xl:left-[30%] rotate-6 rounded object-cover"
				/>

				<ImageElement
					src="./testimonials/testimonial-photo2.jpg"
					alt="testimonial-photo2"
					className="w-[300px] h-[400px] 2xl:w-[400px] 2xl:h-[600px] top-[3%] left-[50%] -rotate-6 rounded object-cover"
				/>

				{/* LEFT TESTIMONIALS */}
				<ImageElement
					src="./testimonials/testimonial01.png"
					alt="testimonial01"
					className="w-[200px] h-[80px] 2xl:w-[300px] 2xl:h-[120px] top-[0%] 2xl:top-[10%] left-[5%] rotate-0 cover-contain"
				/>
				<ImageElement
					src="./testimonials/testimonial02.png"
					alt="testimonial02"
					className="w-[200px] h-[100px] 2xl:w-[300px] 2xl:h-[120px] top-[20%] 2xl:top-[25%] left-[15%] rotate-0 cover-contain"
				/>
				<ImageElement
					src="./testimonials/testimonial03.png"
					alt="testimonial03"
					className="w-[200px] h-[80px] 2xl:w-[300px] 2xl:h-[100px] top-[40%] left-[5%] rotate-0 cover-contain"
				/>
				<ImageElement
					src="./testimonials/testimonial04.png"
					alt="testimonial04"
					className="w-[200px] h-[80px] 2xl:w-[300px] 2xl:h-[100px] top-[60%] 2xl:top-[55%] left-[15%] rotate-0 cover-contain"
				/>
				<ImageElement
					src="./testimonials/testimonial05.png"
					alt="testimonial05"
					className="w-[200px] h-[80px] 2xl:w-[300px] 2xl:h-[100px] top-[80%] 2xl:top-[70%] left-[5%] rotate-0 cover-contain"
				/>

				{/* 	RIGHT TESTIMONIALS 		*/}
				<ImageElement
					src="./testimonials/testimonial01.png"
					alt="testimonial06"
					className="w-[200px] h-[80px] 2xl:w-[300px] 2xl:h-[120px] top-[0%] 2xl:top-[10%] right-[5%] rotate-0 cover-contain"
				/>
				<ImageElement
					src="./testimonials/testimonial02.png"
					alt="testimonial02"
					className="w-[200px] h-[100px] 2xl:w-[300px] 2xl:h-[120px] top-[20%] 2xl:top-[25%] right-[15%] rotate-0 cover-contain"
				/>
				<ImageElement
					src="./testimonials/testimonial03.png"
					alt="testimonial03"
					className="w-[200px] h-[80px] 2xl:w-[300px] 2xl:h-[100px] top-[40%] right-[5%] rotate-0 cover-contain"
				/>
				<ImageElement
					src="./testimonials/testimonial04.png"
					alt="testimonial04"
					className="w-[200px] h-[80px] 2xl:w-[300px] 2xl:h-[100px] top-[60%] 2xl:top-[55%] right-[15%] rotate-0 cover-contain"
				/>
				<ImageElement
					src="./testimonials/testimonial05.png"
					alt="testimonial05"
					className="w-[200px] h-[80px] 2xl:w-[300px] 2xl:h-[100px] top-[80%] 2xl:top-[70%] right-[5%] rotate-0 cover-contain"
				/>
			</div>
		</div>
	)
}

const ImageElement = ({
	src,
	alt,
	className,
}: {
	src: string
	alt: string
	className: string
}) => {
	return (
		<img
			src={src}
			alt={alt}
			className={`shadow-[8px_8px_10px_rgba(0,0,0,0.5)]  absolute ${className}`}
		/>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute -bottom-[15%] -left-40 size-[25rem] rotate-90 text-[var(--leaf-color)] opacity-50" />
			<Leaf1 className="absolute bottom-[10%] left-[47%] size-[7rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute -bottom-[10%] -right-[5%] size-[15rem] text-[var(--leaf-color)]" />
		</>
	)
}
