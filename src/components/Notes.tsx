import Reveal from './Reveal'
import { notes } from '../data/portfolio'

function Notes() {
  return (
    <section className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8fe388]">Thoughts</p>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl">
            Notes from my learning journey
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#9fb3ba]">
            Short reflections behind the projects — how I learn, and why I build the way I do.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {notes.map((note, i) => (
            <Reveal key={note.title} delayMs={i * 90}>
              <article className="group h-full rounded-[20px] bg-[#0a1b21] p-6 ring-1 ring-white/[0.08] transition duration-300 hover:-translate-y-1 hover:ring-[#8fe388]/40">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-[22px] font-medium leading-snug text-white transition group-hover:text-[#8fe388]">
                    {note.title}
                  </h3>
                  <span
                    className="text-lg text-white/30 transition group-hover:text-[#8fe388]"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
                <p className="mt-4 text-[15px] leading-7 text-[#9fb3ba]">{note.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Notes
