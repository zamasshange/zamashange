'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { HeroBackground } from '@/components/hero-background'
import { SiteFooter, WhatsAppFab } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import {
  approach,
  contact,
  disciplines,
  insights,
  services,
  site,
  stats,
  story,
  ventures,
} from '@/lib/site-content'

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Reveal({
  children,
  index = 0,
  className = '',
}: {
  children: React.ReactNode
  index?: number
  className?: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={index}
      variants={reveal}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function VentureLink({
  item,
  children,
  className,
}: {
  item: (typeof ventures)[number]
  children: React.ReactNode
  className: string
}) {
  if ('external' in item && item.external) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link href={item.href} className={className}>
      {children}
    </Link>
  )
}

export function PortfolioSite() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="hero-section pt-24 md:pt-28">
        <HeroBackground variant="hero" />
        <div className="site-container relative z-10 max-w-3xl pb-16 pt-8 md:pb-24 md:pt-12">
          <Reveal>
            <p className="section-eyebrow">{contact.location}</p>
            <h1 className="mt-4 text-[clamp(2.25rem,6vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              Building digital growth{' '}
              <span className="text-primary">through creative systems</span>
            </h1>
          </Reveal>
          <Reveal index={1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{site.heroSubtitle}</p>
          </Reveal>
          <Reveal index={2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/sonke" className="btn-primary">
                Explore Sonke
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-ghost !px-6">
                Contact
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
          <Reveal index={3}>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Disciplines strip */}
      <section className="border-b border-border bg-muted/40 py-8">
        <div className="site-container text-center">
          <p className="text-sm text-muted-foreground">Ideas and disciplines behind the work</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {disciplines.map((item) => (
              <span key={item} className="discipline-pill">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Strategy · Creative systems · Digital growth
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="page-section">
        <div className="site-container">
          <Reveal>
            <div className="section-eyebrow">What I Build</div>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold md:text-4xl">Core creative and technical capabilities</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Practical skills shaped through BDL Corp, BDL News, and the evolution toward Sonke.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Reveal key={service.title} index={index}>
                  <article className="card-elevated card-interactive card-service group flex h-full flex-col p-6 md:p-8">
                    <div className="card-icon-wrap mb-5 flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{service.number}</span>
                    <h3 className="mt-3 text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">{service.description}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="page-section border-y border-border bg-muted/30">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-16">
          <div>
            <Reveal>
              <div className="section-eyebrow">About Zama</div>
              <h2 className="mt-3 text-2xl font-semibold md:text-4xl">Driven by curiosity. Focused on building.</h2>
            </Reveal>
            <Reveal index={1}>
              <p className="mt-6 text-lg leading-relaxed text-foreground/90 md:text-xl">&ldquo;{story[0]}&rdquo;</p>
            </Reveal>
            <div className="mt-6 space-y-4">
              {story.slice(1).map((paragraph, index) => (
                <Reveal key={paragraph} index={index + 2}>
                  <p className="text-base leading-relaxed text-muted-foreground">{paragraph}</p>
                </Reveal>
              ))}
            </div>
            <Reveal index={5}>
              <Link href="/about" className="btn-ghost mt-8 inline-flex">
                Read full story
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>

          <Reveal index={2}>
            <div className="stat-card">
              <p className="text-sm font-semibold">{contact.born}</p>
              <p className="mt-2 text-sm text-muted-foreground">{contact.location}</p>
              <p className="mt-6 border-l-2 border-primary pl-4 text-base font-medium leading-relaxed">{site.tagline}</p>
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6">
                <div>
                  <p className="text-2xl font-semibold">11</p>
                  <p className="mt-1 text-xs text-muted-foreground">Age when computing and art clicked</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">2026</p>
                  <p className="mt-1 text-xs text-muted-foreground">Sonke founded</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="page-section">
        <div className="site-container">
          <Reveal>
            <div className="section-eyebrow">How I Work</div>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold md:text-4xl">From experiment to system — a builder&apos;s approach</h2>
          </Reveal>

          <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2">
            {approach.map((item, index) => (
              <Reveal key={item.step} index={index}>
                <article className="bg-white p-6 md:p-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{item.step}</span>
                  <h3 className="mt-3 text-lg font-semibold md:text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section className="page-section border-y border-border bg-muted/30">
        <div className="site-container">
          <Reveal>
            <div className="section-eyebrow">What I&apos;m Building</div>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold md:text-4xl">Ventures and chapters in the journey</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              The platforms and creative systems Zama is actively building — including BDL News at bdlnews.online.
            </p>
          </Reveal>

          <div className="mt-10 divide-y divide-border border border-border bg-white">
            {ventures.map((item, index) => (
              <Reveal key={item.title} index={index}>
                <VentureLink
                  item={item}
                  className="group flex flex-col gap-4 p-6 transition-colors venture-row md:flex-row md:items-center md:justify-between md:p-8"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">{item.tag}</p>
                    <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{item.description}</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] group-hover:text-primary">
                    {item.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </VentureLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="stat-band">
        <div className="site-container py-14 md:py-16">
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} index={index}>
                <div>
                  <p className="text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-foreground">{stat.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="page-section border-t border-border">
        <div className="site-container">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <div className="section-eyebrow">Founder Notes</div>
              <h2 className="mt-3 text-2xl font-semibold md:text-4xl">Insights & ideas</h2>
            </Reveal>
            <Reveal index={1}>
              <Link href="/insights" className="btn-ghost">
                All notes
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {insights.map((post, index) => (
              <Reveal key={post.href} index={index}>
                <Link href={post.href} className="group block h-full">
                  <article className="card-elevated card-interactive flex h-full flex-col p-6 md:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                      {post.tag} · {post.date}
                    </p>
                    <h3 className="mt-4 text-lg font-semibold leading-snug group-hover:text-primary md:text-xl">{post.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] group-hover:text-primary">
                      Read note
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="hero-section relative overflow-hidden border-t border-border">
        <HeroBackground variant="cta" />
        <div className="site-container relative z-10 py-16 md:py-24">
          <Reveal>
            <h2 className="max-w-2xl text-2xl font-semibold md:text-4xl">
              Let&apos;s discuss your next digital system, brand, or platform.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Open to collaborations, founder conversations, and projects that need creative systems built with care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Let&apos;s talk
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`mailto:${contact.email}`} className="btn-ghost">
                {contact.email}
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Or call{' '}
              <a href={`tel:${contact.phone}`} className="font-medium text-foreground hover:text-primary">
                {contact.phoneLabel}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  )
}
