'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 py-4 transition-all duration-500`}
      >
        {/* Nav pill container — always present, bg darkens on scroll */}
        <div className={`max-w-[1400px] mx-auto flex items-center justify-between px-5 lg:px-8 py-3 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'bg-[#111111]/90 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <div className="w-2 h-2 bg-[#e63527] rounded-sm" />
              <div className="w-2 h-2 bg-[#e63527] rounded-sm" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-white">Zama Shange</span>
            <span className="text-[10px] text-white/60 align-super">®</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <Link href="/" className="text-sm font-medium text-[#e63527] hover:opacity-70 transition-opacity">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium text-white hover:opacity-70 transition-opacity">
              Studio
            </Link>
            <div className="flex items-center gap-1.5">
              <Link href="#work" className="text-sm font-medium text-white hover:opacity-70 transition-opacity">
                Project
              </Link>
              <span className="text-[10px] bg-[#e63527] text-white px-1.5 py-0.5 rounded-full font-medium">05</span>
            </div>
            <Link href="#services" className="text-sm font-medium text-white hover:opacity-70 transition-opacity flex items-center gap-1">
              Pages
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="#careers" className="text-sm font-medium text-white hover:opacity-70 transition-opacity">
              Careers
            </Link>
            <Link href="#contact" className="text-sm font-medium text-white hover:opacity-70 transition-opacity">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.div
              className="flex items-center gap-2 pl-1.5 pr-5 py-1.5 bg-white rounded-full cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-black/10">
                <img
                  src="/images/zama-shange.jpg"
                  alt="Zama Shange"
                  className="w-full h-full object-cover"
                />
              </div>
              <Link
                href="#contact"
                className="text-black text-sm font-medium flex items-center gap-1.5"
              >
                Book A Intro
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#111111] pt-24 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {['Home', 'Studio', 'Project', 'Pages', 'Careers', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-semibold text-white"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
