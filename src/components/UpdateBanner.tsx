import { useEffect, useState } from 'react'

// Banner "ada versi baru" ala NihonGo Master: cek version.json berkala,
// tampilkan ajakan muat ulang bila build di server lebih baru dari yang dibuka.
function UpdateBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let current = ''
    let stopped = false

    async function readVersion(): Promise<string> {
      try {
        const r = await fetch(`/version.json?_vchk=${Date.now()}`, { cache: 'no-store' })
        if (!r.ok) return ''
        const j = await r.json()
        return typeof j.version === 'string' ? j.version : ''
      } catch {
        return ''
      }
    }

    async function check() {
      const latest = await readVersion()
      if (stopped || !latest) return
      if (!current) {
        current = latest
        return
      }
      if (latest !== current) setShow(true)
    }

    check()
    const t1 = setTimeout(check, 15000)
    const t2 = setInterval(check, 5 * 60 * 1000)
    const onVis = () => {
      if (!document.hidden) check()
    }
    document.addEventListener('visibilitychange', onVis)
    return () => {
      stopped = true
      clearTimeout(t1)
      clearInterval(t2)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-4 left-1/2 z-[60] flex w-max max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black shadow-2xl shadow-black/50">
      <span>Ada versi baru 🎉</span>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="rounded-full bg-black px-4 py-2.5 text-sm font-semibold text-white"
      >
        Muat ulang
      </button>
    </div>
  )
}

export default UpdateBanner
