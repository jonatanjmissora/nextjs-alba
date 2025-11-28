import BranchLeaf from "../../public/leaf/branch-leaf"
import Leaf1 from "../../public/leaf/leaf1"
import Leaf2 from "../../public/leaf/leaf2"

export const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute -bottom-7 left-0 size-[20rem] 2xl:size-[25rem] rotate-90 text-(--primary-green) opacity-95" />
			<Leaf1 className="absolute bottom-80 left-[47%] size-[5rem] 2xl:size-[6rem] text-(--primary-green) opacity-95" />
			<Leaf2 className="absolute bottom-30 right-[10%] size-[7rem] 2xl:size-[10rem] text-(--primary-green) opacity-95" />
		</>
	)
}
