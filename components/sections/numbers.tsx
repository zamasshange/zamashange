'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  {
    value: 18,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'From SaaS platforms and mobile apps to brand identities and campaigns — each built to the highest standard.',
  },
  {
    value: 6,
    suffix: '+',
    label: 'Years of Experience',
    description: 'Started building digital products at 12. Deep experience across design, development, and creative strategy.',
  },
  {
    value: 11,
    suffix: '',
    label: 'Disciplines Mastered',
    description: 'UI/UX, development, branding, social media, video, motion, marketing — all under one roof.',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Vision-Driven',
    description: 'Every build treated as a complete digital experience — strategy, design, tech, and culture combined.',
  },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <div ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-medium text-foreground tracking-tight mb-4">
      {displayValue}{suffix}
    </div>
  )
}

export function NumbersSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
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
          <span className="text-foreground text-sm font-medium uppercase tracking-wide">Numbers</span>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Value with animation */}
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              
              {/* Divider with animation */}
              <motion.div 
                className="h-px w-full bg-border mb-4 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              />
              
              {/* Label */}
              <motion.h3 
                className="text-lg font-medium text-foreground mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              >
                {stat.label}
              </motion.h3>
              
              {/* Description */}
              <motion.p 
                className="text-sm text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
