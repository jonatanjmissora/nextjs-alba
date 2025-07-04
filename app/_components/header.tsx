import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-full flex justify-between items-center">
      <a href="#" className="text-2xl font-semibold text-[var(--primary-green)]">
        ALBA
      </a>
    
      <nav className="flex items-center gap-8 header-nav">
        <input type="search" name="search" id="search" placeholder="🔍" className="bg-transparent rounded-2xl p-2 text-right" />
        <a href="#services">Servicios</a>
        <a href="#shop">Tienda</a>
        <a href="#faqs">Preguntas</a>
        <a href="#contact">Contacto</a>
      </nav>

      <nav className="flex gap-8">
        <Link href="/favorites">❤</Link>
        <Link href="/cart">🛒</Link>
        <Link href="/profile">👤</Link>
      </nav>
    </header>
  )
}
