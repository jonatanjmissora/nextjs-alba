import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

type Store = {
	favoritesStore: string[]
	setFavoritesStore: (favorites: string[]) => void
	cartStore: { id: string; quantity: number }[]
	setCartStore: (cart: { id: string; quantity: number }[]) => void
}

export const useStore = create<Store>()(
	persist(
		set => ({
			favoritesStore: [],
			setFavoritesStore: (favorites: string[]) =>
				set({ favoritesStore: favorites }),
			cartStore: [],
			setCartStore: (cart: { id: string; quantity: number }[]) =>
				set({ cartStore: cart }),
		}),
		{
			name: "store",
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
