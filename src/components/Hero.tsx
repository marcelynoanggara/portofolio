function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
          INFORMATION TECHNOLOGY STUDENT
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Building things,
          <br />
          learning technology.
        </h1>

        <p className="mt-7 max-w-xl text-base leading-7 text-neutral-400 md:text-lg">
          Information Technology student at Telkom University
          Surabaya, exploring technology and building digital
          projects.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition duration-200 hover:bg-neutral-200"
          >
            View Projects
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 px-6 py-3 text-sm font-medium transition duration-200 hover:border-white/30 hover:bg-white/5"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero