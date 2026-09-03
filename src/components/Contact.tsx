function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Contact
        </p>

        <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
          FIND ME.
        </h2>

        <p className="mt-6 max-w-xl leading-7 text-neutral-400">
          You can find me through
          the links below.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="https://github.com/marcelynoanggara"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            GitHub
          </a>

          <a
            href="https://www.instagram.com/marchanggara?igsi=ZWtqdXgwdzZ2MmNh"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact