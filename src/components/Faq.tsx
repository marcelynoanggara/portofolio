import { useState } from 'react'
import Reveal from './Reveal'
import { faqs, profile } from '../data/portfolio'

function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[40%_60%] md:gap-10">
        {/* Sticky CTA card */}
        <Reveal>
          <div className="md:sticky md:top-28">
            <div className="relative overflow-hidden rounded-[24px] bg-[#0e2230] ring-1 ring-white/[0.08]">
              <div className="dot-grid absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="relative p-7 md:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8fe388]">FAQ</p>
                <h2 className="mt-4 font-serif text-[32px] font-medium leading-tight text-white">
                  Have any more questions?
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-[#9fb3ba]">
                  The quick answers are on the right. For anything else, message me directly —
                  I&apos;m a student, I read everything myself.
                </p>
              </div>
              <div
                id="contact"
                className="relative flex flex-wrap gap-3 border-t border-white/10 bg-[#07181f]/60 p-6"
              >
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#8fe388]"
                >
                  GitHub ↗
                </a>
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
            <p className="mt-4 px-1 text-[13px] text-white/40">
              Find me on GitHub for code, or Instagram for everything else.
            </p>
          </div>
        </Reveal>

        {/* Accordion */}
        <Reveal delayMs={100}>
          <div className="space-y-4">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <div
                  key={item.q}
                  className={`overflow-hidden rounded-2xl ring-1 transition ${
                    isOpen ? 'bg-[#0a1b21] ring-[#8fe388]/30' : 'bg-[#0a1b21]/60 ring-white/[0.08]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-white">{item.q}</span>
                    <span
                      className={`shrink-0 text-lg text-[#8fe388] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    >
                      ⌄
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[15px] leading-7 text-[#9fb3ba]">{item.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Faq
