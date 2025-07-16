export type Favorites = string[]

export function loadFavorites(): Favorites {
	if (typeof window === "undefined") return []

	const savedLocalFavorites = localStorage.getItem("favorites")
	if (savedLocalFavorites) {
		try {
			return JSON.parse(savedLocalFavorites)
		} catch (error) {
			console.error("Failed to load data from localStorage", error)
			return []
		}
	}

	return []
}

export function saveFavorites(favorites: Favorites): void {
	if (typeof window === "undefined") return

	localStorage.setItem("favorites", JSON.stringify(favorites))
}

export function setToFavorites(id: string): void {
	if (typeof window === "undefined") return

	const favorites = loadFavorites()

	if (favorites.length === 0) favorites.push(id)
	else if (favorites.includes(id)) {
		favorites.splice(favorites.indexOf(id), 1)
	} else {
		favorites.push(id)
	}

	localStorage.setItem("favorites", JSON.stringify(favorites))
}
