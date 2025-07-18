import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

type Store = {
	favoritesStore: string[]
	setFavoritesStore: (favorites: string[]) => void
	cartStore: string[]
	setCartStore: (cart: string[]) => void
}

export const useStore = create<Store>()(
	persist(
		set => ({
			favoritesStore: [],
			setFavoritesStore: (favorites: string[]) =>
				set({ favoritesStore: favorites }),
			cartStore: [],
			setCartStore: (cart: string[]) => set({ cartStore: cart }),
		}),
		{
			name: "store",
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
