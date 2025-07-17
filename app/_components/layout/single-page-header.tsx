import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SinglePageHeader({href}: {href: string}) {
	return (
        <div className="w-full h-[10dvh] border-b-2 border-[var(--secondary-green)] flex flex-col justify-end group">
            <Link
                href={href}
                className="py-4 flex items-center gap-6 cursor-pointer"
            >
                <ArrowLeft size={24} color="var(--primary-green)" className="icon" />
                <span className="header text-[var(--primary-green)] icon">Volver</span>
            </Link>
        </div>
    )
}
