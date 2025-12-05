import { Image as ImageKit } from "@imagekit/next"

export default function Loading() {
	const urlEndp = "https://ik.imagekit.io/jjmissora/Alba"
	return (
		<div className="loading w-full h-dvh flex justify-center items-center text-4xl font-bold bg-(--background-two) relative">
			<div className="relative sm:w-[326px] sm:h-[336px] 2xl:w-[426px] 2xl:h-[438px] custom-shadow rounded-full">
				<ImageKit
					urlEndpoint={`${urlEndp}`}
					src="logo.webp"
					priority={true}
					alt={"logo.webp"}
					fill
					loading="eager"
					className={`object-cover`}
					sizes="(max-width: 768px) 33vw, (max-width: 1200px) 40vw, 50vw"
				/>
			</div>
		</div>
	)
}
