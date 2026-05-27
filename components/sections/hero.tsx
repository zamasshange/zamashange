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
    <section className="relative px-4 pt-4 lg:px-6">
      <div className="relative min-h-[calc(100vh-2rem)] overflow-hidden rounded-[2.5rem] bg-[#0b0b0b]">
        <motion.img
          initial={{ scale: 1.18, opacity: 0 }}
          animate={{ scale: 1.08, opacity: 0.26 }}
          transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Team working"
          className="absolute inset-0 h-full w-full object-cover object-center blur-[2px] scale-110"
        />
        <motion.div
          className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-[#e63527]/12 blur-3xl"
          animate={{ y: [0, 18, 0], x: [0, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_25%),linear-gradient(180deg,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0.4)_44%,rgba(0,0,0,0.82)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1400px] flex-col px-6 pb-20 pt-32 lg:px-16 lg:pb-24 lg:pt-40">
          <div className="flex flex-1 flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8 flex items-center gap-2"
            >
              <motion.div
                className="w-3 h-3 bg-[#e63527] rounded-sm"
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 3 }}
              />
              <span className="text-white/80 text-sm font-medium tracking-wide">Next-Gen Design Agency</span>
            </motion.div>

            <div className="overflow-visible">
              <motion.h1
                className="max-w-5xl font-black text-white leading-[0.9] tracking-[-0.05em]"
                style={{ fontSize: 'clamp(58px, 8.8vw, 134px)' }}
              >
                <div className="overflow-hidden">
                  <motion.span className="block" custom={0} initial="hidden" animate="visible" variants={textReveal}>
                    Next-Gen
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span className="block" custom={1} initial="hidden" animate="visible" variants={textReveal}>
                    Design Agency for
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span className="block" custom={2} initial="hidden" animate="visible" variants={textReveal}>
                    <span className="relative inline-block">
                      {heroWords.map((word, index) => (
                        <motion.span
                          key={word}
                          className="absolute left-0 text-[#e63527]"
                          animate={{
                            opacity: currentWordIndex === index ? 1 : 0,
                            y: currentWordIndex === index ? 0 : (currentWordIndex > index ? -30 : 30),
                          }}
                          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {word}
                        </motion.span>
                      ))}
                      <span className="invisible">
                        {heroWords.reduce((a, b) => (a.length >= b.length ? a : b))}
                      </span>
                    </span>
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span className="block" custom={3} initial="hidden" animate="visible" variants={textReveal}>
                    Brands.
                  </motion.span>
                </div>
              </motion.h1>
            </div>

            <div className="mt-16 flex flex-col gap-10 lg:mt-24 lg:flex-row lg:items-end lg:justify-between">
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex items-center gap-8 lg:gap-16"
              >
                {['Define', 'Design', 'Development'].map((item) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-2 text-white/70 text-base lg:text-lg group cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.35 }}
                  >
                    <span className="text-white/40 group-hover:text-[#e63527] transition-colors text-lg">+</span>
                    <span className="group-hover:text-white transition-colors font-medium">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex flex-col items-start gap-5 lg:items-end"
              >
                <div className="lg:text-right space-y-0.5">
                  <p className="text-white/50 text-base">Branding</p>
                  <p className="text-white text-xl lg:text-2xl font-semibold">Mobile & Web App Design</p>
                  <p className="text-white/50 text-base">for Startups and Giants</p>
                </div>

                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.55 }}
                >
                  <Link href="#work">
                    <motion.span
                      className="flex items-center gap-2 px-6 py-3 bg-[#e63527] text-white rounded-full text-sm font-semibold cursor-pointer"
                      whileHover={{ scale: 1.02, backgroundColor: '#d42f22' }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                    >
                      View Projects
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.span>
                  </Link>
                  <Link href="#contact">
                    <motion.span
                      className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-full text-sm font-semibold cursor-pointer"
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                    >
                      Reach Out
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-white/45 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
