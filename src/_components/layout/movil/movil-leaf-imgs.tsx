import BranchLeafMovil from "../../../../public/leaf/branch-leaf-movil"
import Leaf2Movil from "../../../../public/leaf/leaf2-movil"

export const MovilLeafImgs = () => {
	return (
		<>
			<BranchLeafMovil className="absolute -bottom-6 -left-[5%] size-60 rotate-90 text-(--leaf-color) opacity-(--opacity-leaf)" />
			<Leaf2Movil className="absolute bottom-[3%] right-[5%] size-16 text-(--leaf-color)" />
		</>
	)
}
