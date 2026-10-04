import { useState } from 'react'
import { profile } from '../data/portfolio'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Works', href: '#works' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      {/* Desktop / tablet pill */}
      <nav className="mx-auto hidden max-w-3xl items-center justify-between gap-2 rounded-full border border-white/10 bg-[#0f2a33]/80 py-2 pl-6 pr-2 shadow-lg shadow-black/30 backdrop-blur-md md:flex">
        <a href="#home" className="text-sm font-semibold tracking-tight text-white">
          {profile.shortName}
          <span className="text-[#8fe388]">.</span>
        </a>
        <div className="flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/60 transition hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#8fe388]"
        >
          Let&apos;s talk
        </a>
      </nav>

      {/* Mobile bar */}
      <nav className="mx-auto flex max-w-3xl items-center justify-between rounded-full border border-white/10 bg-[#0f2a33]/80 py-2 pl-6 pr-2 shadow-lg shadow-black/30 backdrop-blur-md md:hidden">
        <a href="#home" className="text-sm font-semibold tracking-tight text-white">
          {profile.shortName}
          <span className="text-[#8fe388]">.</span>
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg font-semibold text-black"
        >
          {open ? '×' : '≡'}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-3xl rounded-3xl border border-white/10 bg-[#0f2a33]/95 p-3 backdrop-blur-md md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-black"
          >
            Let&apos;s talk
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
