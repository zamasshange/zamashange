'use client'

const logos = [
  { name: 'ZestyBite', icon: '◆' },
  { name: 'NexaTech', icon: '✦' },
  { name: 'LuxeAura', icon: '✧' },
  { name: 'DigiMinds', icon: '❋' },
  { name: 'CozyNest', icon: '✶' },
  { name: 'Energetix', icon: '◎' },
]

export function LogoMarquee() {
  return (
    <section className="py-6 bg-white border-y border-black/8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-8">
          {/* Left Text */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-0.5">
              <div className="w-1.5 h-1.5 bg-foreground" />
              <div className="w-1.5 h-1.5 bg-foreground" />
              <div className="w-1.5 h-1.5 bg-foreground" />
              <div className="w-1.5 h-1.5 bg-foreground" />
            </div>
            <p className="text-xs font-medium text-foreground uppercase tracking-wide">
              We&apos;ve done 500+ enterprise and
              <br />
              business consulting.
            </p>
          </div>

          {/* Marquee */}
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-marquee">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-8 shrink-0"
                >
                  <span className="text-lg">{logo.icon}</span>
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
