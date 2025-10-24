import { useStore } from "@/_lib/store"
import { ElementMockType } from "@/_lib/types"
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function AlertDialogComponent({
	children,
	element,
	from,
}: {
	children: React.ReactNode
	element: ElementMockType
	from: "favorites" | "cart"
}) {
	const { favoritesStore, setFavoritesStore } = useStore()
	const { cartStore, setCartStore } = useStore()
	const [open, setOpen] = useState(false)

	const handleDelete = async () => {
		if (from === "favorites") {
			setFavoritesStore(
				favoritesStore.filter(favorite => favorite !== element.id.toString())
			)
		} else {
			setCartStore(cartStore.filter(cart => cart.id !== element.id.toString()))
		}
		setOpen(false)
	}

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger
				asChild
				className="cursor-pointer h-full w-full p-2 2xl:p-4"
			>
				{children}
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className="text-[#333] text-balance text-center text-sm">
						¿ Desea quitar{" "}
						<span className="text-[var(--primary-green)]">
							"{element.title}"
						</span>{" "}
						de favoritos ?
					</AlertDialogTitle>
					<AlertDialogDescription></AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel className="tracking-wider font-semibold bg-pink-50/80">
						Cancelar
					</AlertDialogCancel>
					<form action={handleDelete}>
						<Button
							type="submit"
							className="tracking-wider font-semibold bg-[var(--primary-green)] w-full"
						>
							Confirmar
						</Button>
					</form>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
