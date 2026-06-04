import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

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

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Sonke', href: '/sonke' },
  { label: 'BDL Corp', href: '/bdl-corp' },
  { label: 'Contact', href: '/contact' },
]

function SmartLink({ link, className }: { link: NonNullable<ContentPageProps['primaryLink']>; className: string }) {
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noreferrer" className={className}>
        {link.label} <ArrowUpRight className="h-4 w-4" />
      </a>
    )
  }

  return (
    <Link href={link.href} className={className}>
      {link.label} <ArrowUpRight className="h-4 w-4" />
    </Link>
  )
}

export function ContentPage({ eyebrow, title, intro, body, primaryLink, secondaryLink, facts = [] }: ContentPageProps) {
  return (
    <main className="min-h-screen bg-white text-[#101411]">
      <header className="border-b border-[#dedede] bg-white">
        <div className="mx-auto flex h-20 w-[calc(100%-48px)] max-w-[1200px] items-center justify-between max-sm:w-[calc(100%-24px)]">
          <Link href="/" className="text-[22px] font-semibold tracking-[-0.03em]">
            Zama
          </Link>
          <nav className="hidden items-center gap-7 text-[15px] font-medium md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:opacity-60">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="rounded-[8px] bg-[#101411] px-4 py-2.5 text-[14px] font-semibold text-white">
            Contact
          </Link>
        </div>
      </header>

      <section className="mx-auto grid w-[calc(100%-48px)] max-w-[1200px] gap-10 py-14 max-sm:w-[calc(100%-24px)] lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
        <div>
          <p className="text-[17px] text-[#626262]">{eyebrow}</p>
          <h1 className="mt-5 text-[clamp(2.4rem,7vw,5rem)] font-normal leading-[1.03] tracking-[-0.045em]">
            {title}
          </h1>
          <p className="mt-6 max-w-[680px] text-[18px] leading-[1.45] text-[#626262]">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryLink && <SmartLink link={primaryLink} className="inline-flex items-center gap-2 rounded-[8px] bg-[#101411] px-6 py-3.5 text-[15px] font-semibold text-white" />}
            {secondaryLink && <SmartLink link={secondaryLink} className="inline-flex items-center gap-2 rounded-[8px] border border-[#dedede] px-6 py-3.5 text-[15px] font-semibold text-[#101411]" />}
          </div>
        </div>

        <div className="grid gap-4">
          {body.map((paragraph) => (
            <p key={paragraph} className="rounded-[6px] border border-[#dedede] bg-[#f7f7f7] p-5 text-[17px] leading-[1.5] text-[#333]">
              {paragraph}
            </p>
          ))}
          {facts.length > 0 && (
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact} className="rounded-[6px] bg-[#101411] p-5 text-[16px] font-semibold leading-[1.35] text-white">
                  {fact}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-[#dedede] py-8">
        <div className="mx-auto flex w-[calc(100%-48px)] max-w-[1200px] flex-col gap-3 text-[15px] text-[#626262] max-sm:w-[calc(100%-24px)] md:flex-row md:items-center md:justify-between">
          <p>Under BDL Corp (Burdolar).</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.sonkestudio.co.za" target="_blank" rel="noreferrer" className="hover:text-[#101411]">
              sonkestudio.co.za
            </a>
            <a href="https://burdolar.co.za" target="_blank" rel="noreferrer" className="hover:text-[#101411]">
              burdolar.co.za
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
