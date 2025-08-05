import BranchLeaf from "../../../public/leaf/branch-leaf"
import Leaf1 from "../../../public/leaf/leaf1"
import Leaf2 from "../../../public/leaf/leaf2"
import RoundLeaf from "../../../public/leaf/round-leaf"

export default function SinglePageLeaf() {
	return (
		<>
			<BranchLeaf className="absolute -z-10 top-0 right-[15%] size-[12rem] 2xl:size-[20rem] rotate-x-180 text-[var(--leaf-color)] opacity-50" />
			<Leaf1 className="absolute -z-10 top-[50%] left-[50%] size-[4rem] 2xl:size-[5rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute -z-10 bottom-[5%] right-[5%] size-[6rem] 2xl:size-[10rem] rotate-180 text-[var(--leaf-color)]" />
			<RoundLeaf className="absolute -z-10 bottom-[25%] 2xl:bottom-[17%] -left-[2%] size-[7rem] 2xl:size-[10rem] rotate-180 text-[var(--leaf-color)] opacity-50" />
		</>
	)
}
