import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteFooter, WhatsAppFab } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { navLinks } from '@/lib/site-content'

type ContentPageProps = {
  eyebrow: string
  title: string
  intro: string
  body: string[]
  primaryLink?: {
    label: string
    href: string
    external?: boolean
  }
  secondaryLink?: {
    label: string
    href: string
    external?: boolean
  }
  facts?: string[]
}

function SmartLink({ link, primary }: { link: NonNullable<ContentPageProps['primaryLink']>; primary?: boolean }) {
  const className = primary ? 'btn-primary' : 'btn-ghost'

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noreferrer" className={className}>
        {link.label}
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    )
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
      <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  )
}

export function ContentPage({ eyebrow, title, intro, body, primaryLink, secondaryLink, facts = [] }: ContentPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="panel-hero border-b border-border pt-24 md:pt-28">
        <div className="site-container pb-16 pt-8 md:pb-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="section-eyebrow">{eyebrow}</p>
              <h1 className="mt-4 text-[clamp(2rem,6vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">{title}</h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {primaryLink && <SmartLink link={primaryLink} primary />}
                {secondaryLink && <SmartLink link={secondaryLink} />}
              </div>
            </div>

            <div className="grid gap-3">
              {body.map((paragraph) => (
                <p key={paragraph} className="card-elevated card-interactive p-5 text-[15px] leading-[1.7] text-muted-foreground sm:p-6 sm:text-base">
                  {paragraph}
                </p>
              ))}
              {facts.length > 0 && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {facts.map((fact) => (
                    <div key={fact} className="card-elevated card-interactive border-primary/20 bg-primary/5 p-5 text-sm font-semibold leading-snug">
                      {fact}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-muted/30">
        <div className="site-container">
          <p className="section-eyebrow">Explore</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="discipline-pill hover:border-primary/40 hover:text-primary">
                {link.label}
              </Link>
            ))}
            <Link href="/" className="discipline-pill hover:border-primary/40 hover:text-primary">
              Home
            </Link>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Get in Touch
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  )
}
