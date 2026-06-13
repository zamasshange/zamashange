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
    icon: [
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
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
      logo: {
        '@type': 'ImageObject',
        url: `${site.url}/icon-192x192.png`,
        width: 192,
        height: 192,
      },
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
        <link rel="icon" type="image/png" sizes="48x48" href={`${site.url}/favicon-48x48.png`} />
        <link rel="icon" type="image/png" sizes="96x96" href={`${site.url}/favicon-96x96.png`} />
        <link rel="icon" href={`${site.url}/favicon.ico`} sizes="any" />
        <link rel="apple-touch-icon" href={`${site.url}/apple-touch-icon.png`} sizes="180x180" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
