import type { Metadata, Viewport } from 'next'
import { Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SmoothScroll } from '@/components/smooth-scroll'
import { contact, site } from '@/lib/site-content'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — Founder, Designer & Developer`,
  description: site.description,
  keywords: [
    'Zama Shange',
    'Zama',
    'Sonke',
    'BDL Corp',
    'Burdolar',
    'founder portfolio',
    'creative builder',
    'designer',
    'developer',
    'South Africa',
    'product engineer',
    'brand strategist',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: `${site.name} — Founder, Designer & Developer`,
    description: site.description,
    type: 'website',
    url: site.url,
    siteName: site.name,
    locale: 'en_ZA',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${site.name} — Founder of Sonke & BDL Corp`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Founder, Designer & Developer`,
    description: site.description,
    images: ['/og-image.png'],
    creator: '@zama_shange',
    site: '@zama_shange',
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${site.url}/#person`,
      name: site.name,
      url: site.url,
      jobTitle: 'Founder & Creative Builder',
      description: site.description,
      image: `${site.url}/og-image.png`,
      email: contact.email,
      telephone: contact.phoneLabel,
      birthDate: '2007-06-20',
      homeLocation: {
        '@type': 'Place',
        address: { '@type': 'PostalAddress', addressLocality: 'Johannesburg', addressCountry: 'ZA' },
      },
      sameAs: ['https://www.sonkestudio.co.za', 'https://burdolar.co.za', 'https://bdlnews.online'],
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      name: site.name,
      url: site.url,
      description: site.description,
      inLanguage: 'en-ZA',
      publisher: { '@id': `${site.url}/#person` },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${site.url}/#service`,
      name: site.name,
      url: site.url,
      description: site.description,
      provider: { '@id': `${site.url}/#person` },
      areaServed: [{ '@type': 'Country', name: 'South Africa' }, { '@type': 'Place', name: 'Worldwide' }],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA" className={`${openSans.variable} bg-background`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
