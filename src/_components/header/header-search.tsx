"use client"

import { Search, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function HeaderSearch() {
	const [showInput, setShowInput] = useState(false)
	const [searchValue, setSearchValue] = useState("")
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus()
			setSearchValue("")
		}
	}, [])

	return (
		<div className="relative border border-cyan-500">
			<input
				type="search"
				name="search"
				id="search"
				placeholder=""
				className={`${showInput ? "block w-[165px]" : "hidden"} search-input pr-8 rounded-2xl p-2 text-right absolute -z-0 -right-[50%] top-1/2 -translate-y-1/2 `}
				ref={inputRef}
				value={searchValue}
				onChange={e => setSearchValue(e.target.value)}
			/>
			{showInput ? (
				<X
					size={20}
					className="icon z-10 relative"
					onClick={() => setShowInput(!showInput)}
				/>
			) : (
				<Search
					size={20}
					className="icon z-10 relative text-[var(--primary-green)] cursor-pointer"
					onClick={() => setShowInput(!showInput)}
				/>
			)}
		</div>
	)
}
