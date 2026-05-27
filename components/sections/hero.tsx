'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const heroWords = ['Growing', 'Ambitious', 'Modern', 'Innovative', 'Dynamic']

const textReveal: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.05,
      delay: i * 0.14,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.82 + i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
}

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % heroWords.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-[#111111] overflow-hidden mx-4 mt-4 rounded-3xl">
      {/* Background Image — full bleed, no rounding */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.03, opacity: 0.38 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Team working"
          className="w-full h-full object-cover object-center"
        />
        <motion.div
          className="absolute -right-20 top-16 h-72 w-72 rounded-full bg-[#e63527]/15 blur-3xl"
          animate={{ y: [0, 14, 0], x: [0, -6, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Left fade so text reads cleanly */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/96 via-[#111111]/65 to-transparent" />
        {/* Bottom fade for bottom content */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/72 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 pt-36 pb-24 min-h-screen flex flex-col justify-between">
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center gap-2 mb-10"
          >
            <motion.div
              className="w-3 h-3 bg-[#e63527] rounded-sm"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 2.5 }}
            />
            <span className="text-white/80 text-sm font-medium tracking-wide">Next-Gen Design Agency</span>
          </motion.div>

          {/* Headline — Stodio uses very heavy bold, large, left-aligned */}
          <div className="overflow-visible">
            <motion.h1 className="font-black text-white leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(56px, 8.5vw, 130px)' }}
            >
              <div className="overflow-hidden">
                <motion.span
                  className="block"
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={textReveal}
                >
                  Next-Gen
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  className="block"
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={textReveal}
                >
                  Design Agency for
                </motion.span>
              </div>
              {/* Animated word line */}
              <div className="overflow-hidden">
                <motion.span
                  className="block"
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={textReveal}
                >
                  <span className="relative inline-block">
                    {heroWords.map((word, index) => (
                      <motion.span
                        key={word}
                        className="absolute left-0 text-[#e63527]"
                        animate={{
                          opacity: currentWordIndex === index ? 1 : 0,
                          y: currentWordIndex === index ? 0 : (currentWordIndex > index ? -30 : 30),
                        }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {word}
                      </motion.span>
                    ))}
                    <span className="invisible">
                      {heroWords.reduce((a, b) => a.length >= b.length ? a : b)}
                    </span>
                  </span>
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  className="block"
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={textReveal}
                >
                  Brands.
                </motion.span>
              </div>
            </motion.h1>
          </div>

          {/* Bottom Row — matches Stodio layout exactly */}
          <div className="mt-20 lg:mt-28 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            {/* Left: + Define  + Design  + Development */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-10 lg:gap-20"
            >
              {['Define', 'Design', 'Development'].map((item) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2 text-white/70 text-base lg:text-lg group cursor-pointer"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-white/40 group-hover:text-[#e63527] transition-colors text-lg">+</span>
                  <span className="group-hover:text-white transition-colors font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Branding label + CTA buttons */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col items-start lg:items-end gap-5"
            >
              <div className="lg:text-right space-y-0.5">
                <p className="text-white/50 text-base">Branding</p>
                <p className="text-white text-xl lg:text-2xl font-semibold">Mobile & Web App Design</p>
                <p className="text-white/50 text-base">for Startups and Giants</p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.55 }}
              >
                <Link href="#work">
                  <motion.span
                    className="flex items-center gap-2 px-6 py-3 bg-[#e63527] text-white rounded-full text-sm font-semibold cursor-pointer"
                    whileHover={{ scale: 1.03, backgroundColor: '#d42f22' }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    View Projects
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.span>
                </Link>
                <Link href="#contact">
                  <motion.span
                    className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-full text-sm font-semibold cursor-pointer"
                    whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.08)' }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    Reach Out
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border border-white/25 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
