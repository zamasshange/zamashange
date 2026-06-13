'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logoImage from '@/app/zama_shange_logo.png'
import { navLinks, site } from '@/lib/site-content'

type SiteHeaderProps = {
  theme?: 'light' | 'dark'
}

export function SiteHeader({ theme = 'light' }: SiteHeaderProps) {
  const [open, setOpen] = useState(false)
  const isDark = theme === 'dark'

  return (
    <header
      className={
        isDark
          ? 'fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/75 backdrop-blur-md'
          : 'fixed left-0 right-0 top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md'
      }
    >
      <div className="site-container flex min-h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src={logoImage} alt={site.name} className="h-9 w-9 object-contain" priority />
          <span className="hidden flex-col sm:flex">
            <span className={`text-[15px] font-semibold tracking-[-0.02em] ${isDark ? 'text-white' : 'text-foreground'}`}>
              {site.shortName}
            </span>
            <span className={`text-[10px] font-medium uppercase tracking-[0.14em] ${isDark ? 'text-white/50' : 'text-muted-foreground'}`}>
              Founder · Builder
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isDark ? 'text-white/65 hover:text-white' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            Contact
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center border md:hidden ${
              isDark ? 'border-white/20 text-white' : 'border-border text-foreground'
            }`}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className={`border-t px-4 py-4 md:hidden ${isDark ? 'border-white/10 bg-[#0a0a0a]' : 'border-border bg-white'}`}>
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-base font-medium ${
                  isDark ? 'text-white hover:bg-white/5' : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3 justify-center">
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
