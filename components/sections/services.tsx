'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const services = [
  {
    title: 'UI/UX Design',
    number: '01',
    description: 'Visually polished, emotionally engaging interfaces that balance aesthetics with functionality.',
  },
  {
    title: 'Web Development',
    number: '02',
    description: 'Full-stack platforms — SaaS products, content-driven websites, and interactive tools.',
  },
  {
    title: 'Mobile App Development',
    number: '03',
    description: 'Modern mobile applications for iOS and Android built with performance-first architecture.',
  },
  {
    title: 'Brand Identity',
    number: '04',
    description: 'Creative direction combining internet culture, modern branding trends, and cinematic visuals.',
  },
  {
    title: 'Digital Marketing',
    number: '05',
    description: 'Social media strategy, digital advertising campaigns, and audience growth systems.',
  },
  {
    title: 'Motion & Video',
    number: '06',
    description: 'Promo video production, motion design, and immersive digital storytelling.',
  },
]

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16 pb-12 border-b border-white/10">
          <div>
            {/* Label */}
            <motion.div 
              className="flex items-center gap-2 mb-6"
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
              <span className="text-white text-sm font-medium">Services</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-[-0.03em]"
            >
              What I{' '}
              <span className="text-[#e63527]">Do</span>
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-base max-w-sm lg:pt-8"
          >
            From full-stack development and UI/UX design to brand strategy, digital marketing, and motion — every discipline united by one creative vision.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group py-8 border-b border-white/10 cursor-pointer relative overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover Background */}
              <motion.div
                className="absolute inset-0 bg-white/5"
                initial={{ x: '-100%' }}
                animate={{ x: hoveredIndex === index ? '0%' : '-100%' }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              />

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-8">
                  <motion.h3 
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-[-0.03em] transition-colors"
                    animate={{ 
                      x: hoveredIndex === index ? 20 : 0,
                      color: hoveredIndex === index ? '#ffffff' : '#ffffff'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-white/40 text-sm max-w-xs hidden lg:block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      x: hoveredIndex === index ? 0 : -20
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.description}
                  </motion.p>
                </div>
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center"
                    animate={{ 
                      scale: hoveredIndex === index ? 1 : 0,
                      opacity: hoveredIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                  <span className="text-white/40 text-sm font-medium">[{service.number}]</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
