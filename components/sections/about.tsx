'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const textReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
}

const skills = [
  'Full-Stack Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Brand Identity & Creative Direction',
  'Social Media Strategy',
  'Digital Advertising',
  'Video Editing & Promo Production',
  'Motion Design',
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#f5f5f4]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Label */}
        <motion.div
          className="flex items-center gap-2 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-2.5 h-2.5 bg-[#e63527] rounded-sm"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
          />
          <span className="text-foreground text-sm font-medium">Who we are</span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — Headline + Bio */}
          <div>
            <div className="overflow-hidden mb-8">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.05] tracking-[-0.03em]"
              >
                <motion.span
                  className="block"
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={textReveal}
                >
                  We build search-first
                </motion.span>
                <motion.span
                  className="block"
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={textReveal}
                >
                  digital systems to help
                </motion.span>
                <motion.span
                  className="block text-muted-foreground"
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={textReveal}
                >
                  category leaders.
                </motion.span>
              </motion.h2>
            </div>

            <motion.p
              className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Born 20 June 2007 in Durban, South Africa — Zama Shange is a multidisciplinary 
              digital creative, software developer, designer, and strategist based in Johannesburg. 
              His work lives at the intersection of technology, creativity, and culture — blending 
              cinematic visuals, modern interfaces, strategy, and storytelling into experiences 
              designed to feel bold, memorable, and future-focused.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <Link href="#contact">
                <motion.span
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white rounded-full text-sm font-semibold cursor-pointer"
                  whileHover={{ scale: 1.04, backgroundColor: '#e63527' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  Work with me
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* Right — Photo + Skills */}
          <div className="space-y-8">
            {/* Photo card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#111111]"
            >
              <Image
                src="/images/zama-shange.jpg"
                alt="Zama Shange"
                fill
                className="object-cover object-top opacity-90"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-5 left-5">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e63527] animate-pulse" />
                  Based in Johannesburg, SA
                </span>
              </div>
            </motion.div>

            {/* Skills chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.04 }}
                  className="px-3 py-1.5 rounded-full bg-white border border-black/8 text-foreground text-xs font-medium hover:bg-[#e63527] hover:text-white hover:border-[#e63527] transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
