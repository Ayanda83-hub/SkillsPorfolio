import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div>
      <header className={`${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} fixed w-full z-50 transition-all duration-300`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="font-bold text-lg">Ayanda Ntombela</Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/projects" className="hover:text-blue-600 transition">Projects</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            <Link href="/qualifications" className="hover:text-blue-600 transition">Qualifications</Link>
            <Link href="/personality" className="hover:text-blue-600 transition">Personality</Link>
            <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
            ☰
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg px-4 py-2 space-y-2">
            <Link href="/" className="block hover:text-blue-600">Home</Link>
            <Link href="/projects" className="block hover:text-blue-600">Projects</Link>
            <Link href="/about" className="block hover:text-blue-600">About</Link>
            <Link href="/qualifications" className="block hover:text-blue-600">Qualifications</Link>
            <Link href="/personality" className="block hover:text-blue-600">Personality</Link>
            <Link href="/contact" className="block hover:text-blue-600">Contact</Link>
          </div>
        )}
      </header>
      <main className="pt-20">{children}</main>
    </div>
  )
}
