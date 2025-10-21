import Logo from "../../../public/logo"
import Image from "next/image"

export default function Loading() {
	return (
		<div className="loading w-full h-[100dvh] flex justify-center items-center text-4xl font-bold bg-[#FADEE2] relative">
			<div className="relative size-[330px] 2xl:size-[480px] shadow-[5px_5px_5px_5px_rgba(0,0,0,0.5)] rounded-full">
				<Image src={"/logo.webp"} alt={"Logo"} fill priority/>
			</div>
		</div>
	)
}
