import { Image as ImageKit } from "@imagekit/next"

export default function Home() {
	return (
		<>
			{/* <LeafImgs /> */}

			<div className="absolute bottom-0 -right-80 z-0 overflow-hidden hero-bg">
				<HomeImg1 />
			</div>
		</>
	)
}

const HomeImg1 = () => {
	const urlEndp = "https://ik.imagekit.io/jjmissora/Alba"

	return (
		<div className="w-screen h-screen relative">
			<ImageKit
				urlEndpoint={`${urlEndp}`}
				src="/Layout/hero-bg.webp"
				priority={true}
				alt={"/Layout/hero-bg.webp"}
				fill
				loading="eager"
				className={`object-cover`}
				sizes="(max-width: 768px) 33vw, (max-width: 1200px) 60vw, 120vw"
			/>
		</div>
	)
}

// const LeafImgs = () => {
// 	return (
// 		<>
// 			<BranchLeaf className="absolute top-0 right-[19%] size-[16rem] 2xl:size-[20rem] rotate-x-180 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
// 			<Leaf1 className="absolute top-[43%] 2xl:top-[45%] left-[55%] size-[4rem] 2xl:size-[5rem] text-[var(--leaf-color)]" />
// 			<Leaf2 className="absolute -bottom-[0%] 2xl:bottom-[10%] right-[30%] size-[6rem] 2xl:size-[10rem] rotate-180 text-[var(--leaf-color)]" />
// 			<RoundLeaf className="absolute bottom-[22%] sm:bottom-[25%] 2xl:bottom-[35%] -left-[2%] size-[9rem] 2xl:size-[14rem] rotate-180 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
// 		</>
// 	)
// }
