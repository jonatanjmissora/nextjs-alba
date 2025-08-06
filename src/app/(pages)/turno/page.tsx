"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import SinglePageHeader from "@/_components/layout/single-page-header"
import SinglePageFooter from "@/_components/layout/single-page-footer"
import SinglePageLeaf from "@/_components/layout/single-page-leaf"
import { CalendarCheck, CalendarPlus, Clock } from "lucide-react"
import { setShortDate } from "@/_lib/utils"

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

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault()
	console.log("Turno confirmado")
}

const TurnoBody = () => {
	const [services, setServices] = useState<string>("")
	const [date, setDate] = useState<Date | undefined>(undefined)
	const [time, setTime] = useState<string>("")

	return (
		<form onSubmit={handleSubmit} className="w-full sm:w-[60%] my-12 p-4 sm:p-16 mx-auto flex-1 flex flex-col justify-center sm:justify-start items-center gap-12 bg-[var(--primary-pink)] rounded-tr-4xl rounded-bl-4xl shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] border border-[#d685922a] relative overflow-hidden">
			<ServicesComponent services={services} setServices={setServices}/>

			<div className="w-full flex flex-col gap-6 sm:flex-row justify-center items-start relative z-10">
				<DateComponent date={date} setDate={setDate} setTime={setTime} />
				<TimeComponent time={time} setTime={setTime} />
			</div>

			<button type="submit" className={`cta-button px-12 py-4 my-12 relative z-10 ${!services || !date || !time ? "opacity-50 cursor-not-allowed" : ""}`} disabled={!services || !date || !time}>
				Confirmar Turno
			</button>
			<BgIcons />
		</form>
	)
}

const ServicesComponent = ({
	services,
	setServices,
}: {
	services: string
	setServices: (services: string) => void
}) => {
	const [showServices, setShowServices] = useState<boolean>(false)

	const handleSelectService = (serviceId: string) => {
		setShowServices(false)
		setServices(serviceId)
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
	return (
		<>
			<div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full relative z-10">
				<h2 className="header font-semibold">Servicios: </h2>
				<Input
					className="py-5 bg-[var(--background-one)] shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] text-center"
					placeholder="Agregar Servicio"
					defaultValue={
						servicesData.find(service => service.id === services)?.name
					}
					readOnly
					onClick={() => setShowServices(!showServices)}
				/>
			</div>
			{showServices && (
				<div className="w-full flex flex-col justify-center items-center gap-2">
					{servicesData.map(service => (
						<Badge
							variant="outline"
							key={service.id}
							className="flex flex-col sm:flex-row justify-around items-center gap-2 p-3 w-full bg-[var(--background-two)] shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)]"
							onClick={() => handleSelectService(service.id)}
						>
							<h2>{service.name}</h2>
							<p>{service.description}</p>
							<p>${service.price}</p>
						</Badge>
					))}
				</div>
			)}
		</>
	)
}

const DateComponent = ({
	date,
	setDate,
	setTime,
}: {
	date: Date | undefined
	setDate: (date: Date) => void
	setTime: (time: string) => void
}) => {
	const [showCalendar, setShowCalendar] = useState<boolean>(false)

	const handleSelect = (date: Date) => {
		setDate(date)
		setShowCalendar(false)
		setTime("")
		console.log(date)
	}
	return (
		<article className="w-full flex flex-col gap-4 justify-center items-center">
			<div className="flex justify-between items-center gap-2 w-2/3">
				<h2 className="header font-semibold">Fecha: </h2>
				<Button
					variant="outline"
					type="button"
					onClick={() => setShowCalendar(!showCalendar)}
					className="w-[15ch] shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)]"
				>
					{date ? setShortDate(date?.toISOString().split("T")[0]) : <CalendarPlus />}
				</Button>
			</div>
			{showCalendar && (
				<Calendar
					mode="single"
					selected={date}
					onSelect={handleSelect}
					className="rounded-md border shadow-sm"
					captionLayout="dropdown"
					required
				/>
			)}
		</article>
	)
}

const TimeComponent = ({
	time,
	setTime,
}: {
	time: string
	setTime: (time: string) => void
}) => {
	const [showTime, setShowTime] = useState<boolean>(false)
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

	const handleSetTime = (time: string) => {
		setTime(time)
		setShowTime(false)
	}

	return (
		<div className="flex flex-col items-center justify-center gap-2 w-full">
			<div className="flex justify-between items-center gap-2 w-2/3">
				<h2 className="header font-semibold">Horario:</h2>
				<Button variant="outline" type="button" onClick={() => setShowTime(!showTime)} className="w-[15ch] shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)]">
					{time ? time : <Clock />}
				</Button>
			</div>
			{showTime && (
				<div className="w-full flex flex-wrap justify-center items-center gap-2">
					{hours.map(hour => (
						<Badge
							variant="outline"
							key={hour.time}
							className={`p-3 py-2 w-1/3 bg-[var(--background-two)] shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] ${hour.complete ? "opacity-25" : ""} cursor-pointer`}
							onClick={() => handleSetTime(hour.time)}
						>
							<h2>{hour.time}</h2>
						</Badge>
					))}
				</div>
			)}
		</div>
	)
}

const BgIcons = () => {
	return (
		<>
			<CalendarCheck className="absolute -bottom-[10%] -left-[15%] -rotate-15 text-[var(--primary-green)]/5 size-60 sm:size-120" />
			<Clock className="absolute bottom-[70%] sm:bottom-[-10%] -right-[15%] rotate-15 text-[var(--primary-green)]/5 size-60 sm:size-120" />
		</>
	)
}