import { BranchLeaf } from "@/public/leaf/branch-leaf"
import { Leaf1 } from "@/public/leaf/leaf1"

export default function Test() {
	return (
		<div className="w-full h-[80dvh] 2xl:h-[70dvh] flex justify-between">
			<BranchLeaf className="absolute top-0 right-[15%] size-[20rem] 2xl:size-[10rem] rotate-x-180 text-[var(--leaf-color)]" />
			<Leaf1 className="absolute top-[15%] left-[45%] size-[30rem] text-[var(--leaf-color)]" />
		</div>
	)
}
