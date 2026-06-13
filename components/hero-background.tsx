type HeroBackgroundProps = {
  variant?: 'hero' | 'cta'
}

const meshPaths = [
  'M620 920 C760 720, 860 560, 980 420 S1180 180, 1320 40',
  'M660 920 C790 710, 890 540, 1010 400 S1210 160, 1360 20',
  'M700 920 C820 700, 920 520, 1040 380 S1240 140, 1400 0',
  'M580 920 C730 740, 830 580, 950 440 S1150 200, 1280 60',
  'M540 920 C700 760, 800 600, 920 460 S1120 220, 1240 80',
  'M740 920 C860 680, 960 500, 1080 360 S1280 120, 1440 -20',
  'M500 920 C670 780, 770 620, 890 480 S1090 240, 1200 100',
  'M780 920 C890 660, 990 480, 1110 340 S1310 100, 1480 -40',
]

const secondaryPaths = [
  'M640 900 Q880 650 1100 350 T1380 80',
  'M600 900 Q840 620 1060 320 T1340 50',
  'M680 900 Q920 670 1140 370 T1420 100',
  'M560 900 Q800 640 1020 340 T1300 70',
]

const nodes: [number, number][] = [
  [980, 420],
  [1100, 280],
  [1210, 160],
  [1040, 380],
  [1150, 200],
  [1280, 60],
  [890, 480],
  [1010, 340],
  [1120, 220],
  [950, 440],
  [1060, 320],
  [1180, 180],
]

export function HeroBackground({ variant = 'hero' }: HeroBackgroundProps) {
  const intense = variant === 'hero'
  const prefix = variant === 'hero' ? 'hero' : 'cta'

  return (
    <div className="hero-bg" aria-hidden="true" data-variant={variant}>
      <div className="hero-bg__base" />

      <svg className="hero-bg__mesh" viewBox="0 0 1440 900" preserveAspectRatio="xMaxYMid slice">
        <defs>
          <linearGradient id={`${prefix}-meshStroke`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef3128" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#ef3128" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ff6b5f" stopOpacity="0.35" />
          </linearGradient>
          <radialGradient id={`${prefix}-meshGlow`} cx="78%" cy="42%" r="45%">
            <stop offset="0%" stopColor="#ef3128" stopOpacity={intense ? '0.35' : '0.22'} />
            <stop offset="100%" stopColor="#ef3128" stopOpacity="0" />
          </radialGradient>
          <filter id={`${prefix}-lineGlow`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="1440" height="900" fill={`url(#${prefix}-meshGlow)`} className="hero-bg__glow-rect" />

        <g className="hero-bg__rings" stroke="#ef3128" strokeWidth="1" fill="none" opacity="0.08">
          <circle cx="220" cy="420" r="120" />
          <circle cx="220" cy="420" r="190" />
          <circle cx="220" cy="420" r="260" />
          <circle cx="220" cy="420" r="330" />
        </g>

        <g
          className="hero-bg__ribbon"
          filter={`url(#${prefix}-lineGlow)`}
          stroke={`url(#${prefix}-meshStroke)`}
          strokeWidth="1.1"
          fill="none"
          opacity={intense ? 0.55 : 0.4}
        >
          {meshPaths.map((d, i) => (
            <path key={d} d={d} className="hero-bg__wave-path" style={{ animationDelay: `${i * 0.35}s` }} />
          ))}
        </g>

        <g className="hero-bg__ribbon-secondary" stroke="#ef3128" strokeWidth="0.6" fill="none" opacity="0.25">
          {secondaryPaths.map((d, i) => (
            <path key={d} d={d} className="hero-bg__wave-path hero-bg__wave-path--slow" style={{ animationDelay: `${i * 0.5}s` }} />
          ))}
        </g>

        <g className="hero-bg__nodes" fill="#ef3128">
          {nodes.map(([cx, cy], i) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r={i % 3 === 0 ? 2.5 : 1.5}
              opacity={i % 2 === 0 ? 0.85 : 0.45}
              className="hero-bg__node"
              style={{ animationDelay: `${i * 0.25}s` }}
            />
          ))}
        </g>

        <g className="hero-bg__diagonal" stroke="#ef3128" strokeWidth="0.4" opacity="0.08">
          {[...Array(8)].map((_, i) => (
            <line
              key={`d-${i}`}
              x1={900 + i * 40}
              y1="900"
              x2={1200 + i * 30}
              y2="0"
              className="hero-bg__diagonal-line"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}
        </g>
      </svg>

      <div className="hero-bg__glow" />
      <div className="hero-bg__readability" />
      <div className="hero-bg__grain" />
    </div>
  )
}
