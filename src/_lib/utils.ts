export const setShortDate = (date: string) => {
	const newDate = new Date(date)
	newDate.setDate(newDate.getDate() + 1)
	return new Intl.DateTimeFormat("es-ES", {
		year: "numeric",
		month: "short",
		day: "2-digit",
	}).format(newDate)
}