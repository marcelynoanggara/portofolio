import Reveal from './Reveal'
import { principles } from '../data/portfolio'

function Principles() {
  const row = [...principles, ...principles]

  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8fe388]">How I work</p>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl">
            Principles I build by
          </h2>
        </Reveal>
      </div>

      <div className="marquee-paused mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee-slow flex w-max gap-5 px-5">
          {row.map((item, i) => (
            <article
              key={`${item.title}-${i}`}
              className={`w-[320px] shrink-0 rounded-[24px] bg-[#0e2230] p-6 shadow-lg shadow-black/25 ring-1 ring-white/[0.06] ${
                i % 4 === 1 ? 'rotate-[-1deg]' : ''
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8fe388]/15 font-serif text-lg text-[#8fe388]">
                {item.title.charAt(0)}
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2.5 text-[15px] leading-7 text-white/85">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Principles
