import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import logoImage from '@/app/zama_shange_logo.png'
import zamaPic from '@/app/zamapic.jpg'
import { contact, footerLinks, site, socialLinks } from '@/lib/site-content'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="site-container py-12 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] lg:gap-16">
          <div className="max-w-md">
            <Link href="/">
              <Image src={logoImage} alt={site.name} className="h-9 w-auto" />
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">{site.tagline}</p>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              {contact.location}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">BDL Corp 2026 · Burdolar</p>
            <Link href="/contact" className="btn-primary mt-8">
              Get in Touch
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-10">
            <div>
              <div className="section-eyebrow">Navigate</div>
              <ul className="mt-5 space-y-3">
                {footerLinks.navigate.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="section-eyebrow">Ventures</div>
              <ul className="mt-5 space-y-3">
                {footerLinks.ventures.map((link) =>
                  'external' in link && link.external ? (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {link.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="section-eyebrow">Contact</div>
              <ul className="mt-5 space-y-4">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="group flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-primary/20 bg-primary/5">
                      <Mail className="h-4 w-4 text-primary" />
                    </span>
                    <span className="break-all pt-1.5">{contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contact.phone}`}
                    className="group flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-primary/20 bg-primary/5">
                      <Phone className="h-4 w-4 text-primary" />
                    </span>
                    <span className="pt-1.5">{contact.phoneLabel}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 border-t border-border pt-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={zamaPic}
              alt={site.name}
              width={56}
              height={56}
              className="h-14 w-14 shrink-0 rounded-full border border-border object-cover"
            />
            <div>
              <p className="text-sm font-semibold">{site.name}</p>
              <p className="text-xs text-muted-foreground">Founder · Designer · Developer</p>
            </div>
          </div>
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
            © BDL Corp 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 md:bottom-6 md:right-6 md:h-14 md:w-14"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  )
}
