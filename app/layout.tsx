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
  title: 'Zama Shange | Founder of Sonke',
  description: 'Premium founder portfolio for Zama Shange, founder of Sonke, designer, developer, and creative builder from South Africa.',
  keywords: ['Zama Shange', 'Sonke', 'founder portfolio', 'creative builder', 'designer', 'developer', 'South Africa'],
  openGraph: {
    title: 'Zama Shange | Founder of Sonke',
    description: 'Building systems, brands, and digital experiences from South Africa to the world.',
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
