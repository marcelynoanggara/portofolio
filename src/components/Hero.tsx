import { profile, techMarquee } from '../data/portfolio'
import { profileImg } from '../assets/profile'

function Hero() {
  const marquee = [...techMarquee, ...techMarquee]

  return (
    <section id="home" className="relative overflow-hidden px-6 pb-16 pt-36 md:pt-40">
      {/* Glow + concentric rings */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#3ed598]/10 blur-3xl" />
        <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full border border-white/[0.06]" />
        <div className="absolute left-1/2 top-6 h-96 w-96 -translate-x-1/2 rounded-full border border-white/[0.04]" />
        <div className="dot-grid absolute inset-x-0 bottom-0 h-40 opacity-40 [mask-image:linear-gradient(to_top,black,transparent)]" />
        <span className="absolute right-[18%] top-40 text-[#8fe388]">✦</span>
        <span className="absolute left-[16%] top-64 text-sm text-[#8fe388]/60">✦</span>
      </div>

      <div className="relative mx-auto w-full max-w-4xl text-center">
        {/* Avatar image */}
        <div className="animate-float mx-auto h-[110px] w-[110px] overflow-hidden rounded-full border border-[#8fe388]/30 bg-white shadow-[0_0_60px_rgba(62,213,152,0.25)]">
          <img
            src={profileImg}
            alt={profile.name}
            className="h-full w-full object-cover object-[center_18%]"
          />
        </div>

        {/* Availability badge */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#8fe388]/25 bg-[#10261c] px-4 py-2 text-[13px] font-medium text-white/85">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7ee787] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7ee787]" />
          </span>
          Open to learning &amp; collaboration
        </div>

        <h1 className="mt-8 font-serif text-[42px] font-medium leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
          {profile.headlineA}
          <br />
          {profile.headlineB}
          <span className="ml-2 align-top text-3xl text-[#8fe388] md:text-4xl">✦</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#9fb3ba] md:text-lg md:leading-8">
          {profile.intro}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#8fe388]"
          >
            Let&apos;s talk
          </a>
          <a
            href="#works"
            className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/5"
          >
            View my work
          </a>
        </div>

        <p className="mt-14 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8fe388]">
          Currently exploring
        </p>
      </div>

      {/* Tech marquee */}
      <div className="marquee-paused relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-12 pr-12">
          {marquee.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="whitespace-nowrap text-lg font-semibold text-white/35 transition hover:text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
