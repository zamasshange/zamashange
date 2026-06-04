import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SmoothScroll } from '@/components/smooth-scroll'
import logoImage from '@/app/zama_shange_logo.png'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zamashange.co.za'),
  title: 'Zama Shange | Founder of Sonke, BDL Corp & Burdolar',
  description: 'Premium founder portfolio for Zama Shange - founder of Sonke, BDL Corp (Burdolar), designer, developer, and creative builder from South Africa.',
  keywords: [
    'Zama Shange',
    'Zama',
    'Sonke',
    'BDL Corp',
    'Burdolar',
    'Zama Sonke',
    'Sonke Zama',
    'Zama AI',
    'Zama founder',
    'founder portfolio',
    'creative builder',
    'designer',
    'developer',
    'South Africa',
    'BDL',
    'digital agency South Africa',
    'brand strategist',
    'product engineer',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Zama Shange | Founder of Sonke, BDL Corp & Burdolar',
    description: 'Building systems, brands, and digital experiences from South Africa to the world.',
    type: 'website',
    url: 'https://www.zamashange.co.za',
    siteName: 'Zama Shange',
    locale: 'en_ZA',
    alternateLocale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zama Shange - Founder of Sonke, BDL Corp & Burdolar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zama Shange | Founder of Sonke, BDL Corp & Burdolar',
    description: 'Building systems, brands, and digital experiences from South Africa to the world.',
    images: ['/og-image.png'],
    creator: '@zama_shange',
    site: '@zama_shange',
  },
  authors: [{ name: 'Zama Shange' }],
  creator: 'Zama Shange',
  publisher: 'Zama Shange',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32 48x48', type: 'image/x-icon' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: 'your-google-site-verification-code', // Add your Google Search Console verification code here
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

// JSON-LD structured data for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://www.zamashange.co.za/#person',
      name: 'Zama Shange',
      url: 'https://www.zamashange.co.za',
      jobTitle: 'Founder & Creative Builder',
      description: 'Founder of Sonke, BDL Corp (Burdolar), designer, developer, and creative builder from South Africa.',
      birthDate: '2007-06-20',
      birthPlace: {
        '@type': 'Place',
        address: { '@type': 'PostalAddress', addressLocality: 'Durban', addressCountry: 'ZA' }
      },
      homeLocation: {
        '@type': 'Place',
        address: { '@type': 'PostalAddress', addressLocality: 'Johannesburg', addressCountry: 'ZA' }
      },
      sameAs: [
        'https://www.sonkestudio.co.za',
        'https://www.burdolar.co.za'
      ],
      worksFor: [
        { '@type': 'Organization', '@id': 'https://www.zamashange.co.za/#sonke', name: 'Sonke', url: 'https://www.sonkestudio.co.za', description: 'AI tools, career, student, creator, and creative systems ecosystem' },
        { '@type': 'Organization', '@id': 'https://www.zamashange.co.za/#bdl', name: 'BDL Corp', url: 'https://www.burdolar.co.za', alternateName: 'Burdolar', description: 'Underground creative initiative focused on marketing, strategy, videography, and software development' }
      ],
      knowsAbout: ['Product Engineering', 'UI/UX Design', 'Digital Storytelling', 'Brand Strategy', 'Software Development', 'Videography']
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.zamashange.co.za/#website',
      url: 'https://www.zamashange.co.za',
      name: 'Zama Shange Portfolio',
      publisher: { '@type': 'Person', '@id': 'https://www.zamashange.co.za/#person' },
      potentialAction: {
        '@type': 'ContactAction',
        name: 'Contact',
        target: 'https://www.zamashange.co.za/contact'
      }
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.zamashange.co.za/#sonke',
      name: 'Sonke',
      url: 'https://www.sonkestudio.co.za',
      description: 'AI tools, career, student, creator, and creative systems ecosystem founded by Zama Shange',
      foundingDate: '2026',
      founder: { '@type': 'Person', '@id': 'https://www.zamashange.co.za/#person' }
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.zamashange.co.za/#bdl',
      name: 'BDL Corp',
      alternateName: 'Burdolar',
      url: 'https://www.burdolar.co.za',
      description: 'Underground creative initiative focused on marketing, strategy, videography, editing, and software development founded by Zama Shange',
      founder: { '@type': 'Person', '@id': 'https://www.zamashange.co.za/#person' }
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
