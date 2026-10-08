import Reveal from './Reveal'
import { profile } from '../data/portfolio'
import { profileImg } from '../assets/profile'

const facts = ['2nd year IT student', 'React • Golang • C++ • Python']

function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8fe388]">About me</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-white md:text-[42px]">
            Know who I am
          </h2>
          <p className="mt-6 text-base leading-8 text-[#9fb3ba]">
            I&apos;m an undergraduate Information Technology student at Telkom University Surabaya.
            My days are split between coursework programming,and software
            development and personal projects where I practice shipping real things to the web.
          </p>
          <p className="mt-4 text-base leading-8 text-[#9fb3ba]">
            I like the full cycle : understanding a problem, building a simple solution, deploying it,
            and improving it in public on GitHub. That loop is how this portfolio, my QR generator,
            and my data analysis tool all came to life.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {facts.map((fact) => (
              <span
                key={fact}
                className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-white/85"
              >
                {fact}
              </span>
            ))}
          </div>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#8fe388]/60 hover:bg-white/5"
          >
            See my GitHub ↗
          </a>
        </Reveal>

        <Reveal delayMs={120}>
          {/* Polaroid-style identity card */}
          <div className="mx-auto w-full max-w-sm rotate-3 rounded-[4px] bg-white p-3 pb-5 shadow-2xl shadow-black/50 transition duration-500 hover:rotate-0">
            <div className="relative">
              <img
                src={profileImg}
                alt={profile.name}
                className="aspect-[4/5] w-full rounded-[2px] bg-white object-cover object-[center_12%]"
              />
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#8fe388]/30 bg-[#07181f]/90 px-3.5 py-1.5 text-[11px] font-medium text-white/85">
                IT Student • Builder
              </span>
            </div>
            <p className="mt-4 text-center font-serif text-xl text-neutral-900">{profile.name}</p>
            <p className="mt-1 text-center text-xs text-neutral-500">{profile.university}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
