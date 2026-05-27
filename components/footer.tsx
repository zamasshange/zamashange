'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const footerLinks = {
  col1: [
    { name: 'Home', href: '/' },
    { name: 'Studio', href: '#about' },
    { name: 'Projects', href: '#work' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' },
  ],
  col2: [
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Branding', href: '#services' },
    { name: 'Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ],
  col3: [
    { name: 'Portfolio', href: '#work' },
    { name: 'About Us', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Support', href: '#contact' },
  ],
  col4: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'License', href: '#' },
    { name: '404', href: '#' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'ig' },
  { name: 'Facebook', href: 'https://facebook.com', icon: 'fb' },
  { name: 'Twitter', href: 'https://twitter.com', icon: 'x' },
  { name: 'YouTube', href: 'https://youtube.com', icon: 'yt' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-[#0d0d0d] overflow-hidden mx-4 mb-4 rounded-3xl">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 lg:pt-28 pb-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
          {/* Left Side - Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 leading-tight">
              Stay updated with<br />Zama Shange news
            </h3>

            {/* Email Input */}
            <form onSubmit={handleSubscribe} className="mb-8">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full max-w-md px-6 py-4 pr-16 rounded-full bg-transparent border border-white/20 text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none transition-colors text-sm"
                />
                <motion.button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#0d0d0d]">
                    <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm mt-3"
                >
                  Thanks for subscribing!
                </motion.p>
              )}
            </form>

            {/* Social Links */}
            <div className="flex items-center gap-2 flex-wrap">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white text-xs font-medium">{social.icon}</span>
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="none" className="text-white/50">
                    <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {Object.values(footerLinks).map((col, colIndex) => (
              <div key={colIndex}>
                <ul className="space-y-3">
                  {col.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Large Brand Text */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
        className="overflow-hidden px-4 lg:px-8"
      >
        <h2
          className="font-black text-white leading-none tracking-[-0.03em] whitespace-nowrap select-none"
          style={{ fontSize: 'clamp(60px, 11vw, 160px)' }}
        >
          ZAMA SHANGE
        </h2>
      </motion.div>

      {/* Bottom Bar */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 border-t border-white/8 mt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Zama Shange. All rights reserved.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-white/30 hover:text-white transition-colors text-sm"
            whileHover={{ y: -2 }}
          >
            Back to top
            <svg
              className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
