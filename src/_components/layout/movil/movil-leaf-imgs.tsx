import BranchLeafMovil from "../../../../public/leaf/branch-leaf-movil"
import Leaf2Movil from "../../../../public/leaf/leaf2-movil"

export const MovilLeafImgs = () => {
	return (
		<>
			<BranchLeafMovil className="absolute bottom-0 -left-[5%] size-[15rem] rotate-90 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
			<Leaf2Movil className="absolute bottom-[3%] right-[5%] size-[4rem] text-[var(--leaf-color)]" />
		</>
	)
}
