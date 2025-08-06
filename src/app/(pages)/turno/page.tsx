"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import SinglePageHeader from "@/_components/layout/single-page-header"
import SinglePageFooter from "@/_components/layout/single-page-footer"
import SinglePageLeaf from "@/_components/layout/single-page-leaf"

export default function TurnoPage() {
	return (
		<div className="w-full min-h-[100dvh] px-6 sm:px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] flex flex-col relative">
			<SinglePageHeader text="Turno" href="services" />

			<TurnoBody />

			<SinglePageFooter />

			<SinglePageLeaf />
		</div>
	)
}

const TurnoBody = () => {
	const [showServices, setShowServices] = useState<boolean>(false)
	const [date, setDate] = useState<Date>(new Date())
	const [time, setTime] = useState<string>("")
	const [showShift, setShowShift] = useState<boolean>(false)
	const handleShowServices = () => {
		setShowServices(!showServices)
	}
	const servicesData = [
		{
			id: "s1",
			name: "Servicio 1",
			price: 100,
			description: "Descripción del servicio 1",
		},
		{
			id: "s2",
			name: "Servicio 2",
			price: 200,
			description: "Descripción del servicio 2",
		},
		{
			id: "s3",
			name: "Servicio 3",
			price: 300,
			description: "Descripción del servicio 3",
		},
		{
			id: "s4",
			name: "Servicio 4",
			price: 400,
			description: "Descripción del servicio 4",
		},
	]
	const hours = [
		{ time: "8:00", complete: true },
		{ time: "9:00", complete: false },
		{ time: "10:00", complete: false },
		{ time: "11:00", complete: true },
		{ time: "12:00", complete: false },
		{ time: "13:00", complete: false },
		{ time: "14:00", complete: false },
		{ time: "15:00", complete: true },
		{ time: "16:00", complete: true },
		{ time: "17:00", complete: true },
		{ time: "18:00", complete: true },
		{ time: "19:00", complete: false },
		{ time: "20:00", complete: false },
		{ time: "21:00", complete: true },
	]
	return (
		<div className="w-[60%] my-12 p-10 mx-auto flex-1 flex flex-col justify-start items-center gap-8 bg-[var(--primary-pink)] rounded-tr-4xl rounded-bl-4xl shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] border border-[#d685922a]">
			<div className="flex gap-2 w-full">
				<Input className="h-12 bg-white shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)]hadow" />
				<button
					type="button"
					className="cta-button w-[55%] px-3 py-2"
					onClick={handleShowServices}
				>
					Agregar Turno
				</button>
			</div>
			{showServices && (
				<div className="w-full flex flex-col justify-center items-center gap-2">
					{servicesData.map(service => (
						<Badge
							variant="outline"
							key={service.id}
							className="flex justify-around items-center gap-2 p-3 w-full bg-[var(--background-two)]"
						>
							<h2>{service.name}</h2>
							<p>{service.description}</p>
							<p>${service.price}</p>
						</Badge>
					))}
				</div>
			)}
			<div className="w-full flex gap-2">
				{showShift ? (
					<Calendar
						mode="single"
						selected={date}
						onSelect={setDate}
						className="rounded-md border shadow-sm"
						captionLayout="dropdown"
						required
					/>
				) : (
					<h2>Fecha</h2>
				)}
				<div className="flex flex-col items-center justify-center gap-2 w-full">
					<h2 className="header font-semibold">Horario</h2>
					<div className="w-full flex flex-wrap justify-center items-center gap-2">
						{hours.map(hour => (
							<Badge
								variant="outline"
								key={hour.time}
								className={`p-3 py-2 w-1/3 bg-[var(--background-two)] ${hour.complete ? "opacity-25" : ""}`}
							>
								<h2>{hour.time}</h2>
							</Badge>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
