import { profile } from '../data/portfolio'

const socials = [
  { label: 'GitHub', href: profile.github },
  { label: 'Instagram', href: profile.instagram },
  { label: 'Live site', href: profile.liveSite },
]

const stickers = ['✦ Code', 'Go', 'C++', 'React', 'Ship it', '✦ Learn']

function Contact() {
  return (
    <footer className="px-6 pb-10 pt-4">
      <div className="mx-auto max-w-6xl">
        {/* Sticker row */}
        <div className="flex flex-wrap items-end gap-3 pb-6" aria-hidden="true">
          {stickers.map((s, i) => (
            <span
              key={s}
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide ring-1 ring-white/10 ${
                i % 3 === 0
                  ? 'bg-[#3ed598] text-[#07181f]'
                  : i % 3 === 1
                    ? 'rotate-[-2deg] bg-white text-black'
                    : 'rotate-[2deg] bg-[#0e2230] text-white'
              }`}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name} — Built with React &amp; TypeScript.
          </p>
          <div className="flex flex-wrap gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#8fe388]"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contact
