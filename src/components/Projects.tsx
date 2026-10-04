import Reveal from './Reveal'
import { projects, type Project } from '../data/portfolio'

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="relative flex h-full min-h-[260px] items-center justify-center overflow-hidden p-6 md:p-8">
      <div className="dot-grid absolute inset-0 opacity-60" aria-hidden="true" />
      {/* Browser-style mockup */}
      <div className="relative w-full max-w-md rotate-[-2deg] rounded-2xl bg-[#07181f]/90 shadow-2xl shadow-black/50 ring-1 ring-white/10 transition duration-500 group-hover:rotate-0">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#8fe388]/70" />
          <span className="ml-3 truncate text-[11px] text-white/40">{project.repoUrl.replace('https://', '')}</span>
        </div>

        <div className="p-5">
          {project.visual === 'chart' && (
            <div className="flex h-36 items-end gap-3" aria-hidden="true">
              {[40, 65, 52, 82, 58, 92, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-lg bg-gradient-to-t from-[#3ed598]/30 to-[#8fe388]"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          )}
          {project.visual === 'qr' && (
            <div className="flex h-36 items-center justify-center" aria-hidden="true">
              <div className="grid grid-cols-5 gap-1.5">
                {Array.from({ length: 25 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-4 w-4 rounded-[4px] ${[0, 4, 6, 12, 18, 20, 24, 8, 16].includes(i) ? 'bg-white' : 'bg-white/15'}`}
                  />
                ))}
              </div>
            </div>
          )}
          {project.visual === 'code' && (
            <div className="space-y-2.5 font-mono text-[11px] leading-5" aria-hidden="true">
              <p className="text-[#8fe388]">struct Node {'{ int data; Node* next; }'};</p>
              <p className="text-white/60">void push(Node*&amp; head, int value) {'{'}</p>
              <p className="pl-4 text-white/80">head = new Node{'{value, head}'};</p>
              <p className="text-white/60">{'}'} // O(1) — foundations first</p>
            </div>
          )}
          {project.visual === 'browser' && (
            <div aria-hidden="true">
              <div className="h-4 w-3/4 rounded bg-white/80" />
              <div className="mt-3 h-3 w-1/2 rounded bg-white/30" />
              <div className="mt-6 flex gap-2">
                <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-black">Let&apos;s talk</span>
                <span className="rounded-full border border-white/30 px-3 py-1.5 text-[10px] font-semibold text-white">View work</span>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2">
                <span className="h-10 rounded-lg bg-white/10" />
                <span className="h-10 rounded-lg bg-[#8fe388]/30" />
                <span className="h-10 rounded-lg bg-white/10" />
              </div>
            </div>
          )}
          <p className="mt-5 font-serif text-lg leading-snug text-white">{project.title}</p>
          <p className="mt-1 text-xs text-white/45">
            {project.brand} • {project.year}
          </p>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="works" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8fe388]">Curated work</p>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl">
            Featured projects
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[#9fb3ba]">
            Things I have built while learning — each one live, and each one readable on GitHub.
          </p>
        </Reveal>

        <div className="mt-14 space-y-8">
          {projects.map((project, idx) => (
            <article
              key={project.number}
              className="group sticky overflow-hidden rounded-[28px] shadow-2xl shadow-black/40 ring-1 ring-white/10"
              style={{ top: `${88 + idx * 14}px`, background: project.bg }}
            >
              <div className="grid md:grid-cols-[45%_55%]">
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8fe388]">
                    {project.brand} • {project.year}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl font-medium leading-tight text-white md:text-[32px]">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-white/70">{project.description}</p>

                  <ul className="mt-6 space-y-2.5">
                    {project.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-white/85">
                        <span className="mt-0.5 font-bold text-[#8fe388]">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#8fe388]"
                    >
                      View live ↗
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <ProjectVisual project={project} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
