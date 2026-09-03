function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight"
        >
          MARCEL PORTOFOLIO
        </a>

        <div className="hidden items-center gap-8 text-sm text-neutral-400 md:flex">
          <a
            href="#about"
            className="transition hover:text-white"
          >
            About
          </a>

          <a
            href="#projects"
            className="transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="transition hover:text-white"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar