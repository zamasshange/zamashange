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
    'founder portfolio',
    'creative builder',
    'designer',
    'developer',
    'South Africa',
    'BDL',
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
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
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
  '@type': 'Person',
  name: 'Zama Shange',
  url: 'https://www.zamashange.co.za',
  jobTitle: 'Founder & Creative Builder',
  description: 'Founder of Sonke, BDL Corp (Burdolar), designer, developer, and creative builder from South Africa.',
  sameAs: [
    'https://www.zamashange.co.za',
  ],
  worksFor: {
    '@type': 'Organization',
    name: ['Sonke', 'BDL Corp', 'Burdolar']
  },
  nationality: {
    '@type': 'Country',
    name: 'South Africa'
  }
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
