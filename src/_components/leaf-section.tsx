import BranchLeaf from "../../public/leaf/branch-leaf"
import Leaf1 from "../../public/leaf/leaf1"
import Leaf2 from "../../public/leaf/leaf2"

export const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute -bottom-7 left-0 size-60 2xl:size-80 rotate-90 text-(--primary-green) opacity-95" />
			<Leaf1 className="absolute bottom-80 left-[47%] size-20 2xl:size-28 text-(--primary-green) opacity-95" />
			<Leaf2 className="absolute bottom-100 right-[10%] size-20 2xl:size-28 text-(--primary-green) opacity-95" />
		</>
	)
}
