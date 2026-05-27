import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SmoothScroll } from '@/components/smooth-scroll'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zama Shange | Next-Gen Design Agency',
  description: 'Next-Gen Design Agency for Growing Brands. Branding, Mobile & Web App Design for Startups and Giants.',
  keywords: ['design agency', 'branding', 'web design', 'mobile design', 'UI/UX', 'development'],
  openGraph: {
    title: 'Zama Shange | Next-Gen Design Agency',
    description: 'Next-Gen Design Agency for Growing Brands.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
