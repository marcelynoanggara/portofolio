function Ribbon() {
  const items = [
    'Learn by building',
    'User friendly',
    'Clean code',
    'Keep improving',
    'Foundations first',
    'Ship & iterate',
  ]
  const row = [...items, ...items]

  return (
    <div className="relative -rotate-2 overflow-hidden bg-gradient-to-r from-[#3ed598] to-[#8fe388] py-3.5 shadow-lg shadow-[#3ed598]/20">
      <div className="animate-marquee flex w-max items-center gap-8 pr-8">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 whitespace-nowrap text-sm font-bold uppercase tracking-[0.14em] text-[#07181f]"
          >
            {item} <span aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Ribbon
