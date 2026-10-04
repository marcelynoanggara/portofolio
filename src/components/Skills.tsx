import Reveal from './Reveal'
import { services } from '../data/portfolio'

function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8fe388]">My services</p>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl">
            What I can do
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[#9fb3ba]">
            A general IT &amp; software toolkit — built through coursework and shipped projects.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delayMs={i * 80}>
              <article
                className={`group relative h-full overflow-hidden rounded-[24px] p-7 ring-1 transition duration-300 hover:-translate-y-1 hover:ring-[#8fe388]/50 md:p-8 ${
                  service.highlight
                    ? 'bg-gradient-to-br from-[#0e2a24] via-[#0a1b21] to-[#07181f] ring-[#8fe388]/30 shadow-[0_0_50px_rgba(62,213,152,0.12)]'
                    : 'bg-[#0a1b21] ring-white/[0.08]'
                }`}
              >
                {service.highlight && (
                  <div
                    className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-[#3ed598]/20 blur-2xl"
                    aria-hidden="true"
                  />
                )}
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[#8fe388]" aria-hidden="true">
                      ✦
                    </span>
                    {service.highlight && (
                      <span className="rotate-3 rounded-xl bg-white px-3 py-2 text-[11px] font-semibold text-black shadow-lg">
                        Main focus right now
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-medium text-white">{service.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#9fb3ba]">{service.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
