'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Zenith Brand',
    category: 'BRAND IDENTITY',
    color: 'from-[#e63527] to-[#ff6b5b]',
    gradient: 'linear-gradient(135deg, #e63527 0%, #ff6b5b 100%)',
  },
  {
    id: 2,
    title: 'Nova App',
    category: 'UI/UX DESIGN',
    color: 'from-[#111111] to-[#2a2a2a]',
    gradient: 'linear-gradient(135deg, #111111 0%, #2a2a2a 100%)',
  },
  {
    id: 3,
    title: 'Pulse Web',
    category: 'WEB DEVELOPMENT',
    color: 'from-[#1d4ed8] to-[#3b82f6]',
    gradient: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
  },
  {
    id: 4,
    title: 'Spark Mobile',
    category: 'MOBILE APP',
    color: 'from-[#0f766e] to-[#14b8a6]',
    gradient: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
  },
  {
    id: 5,
    title: 'Surge Campaign',
    category: 'DIGITAL MARKETING',
    color: 'from-[#7c3aed] to-[#a78bfa]',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
  },
]

export function WorkSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="work" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header with Zama's Photo */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16 gap-8">
          {/* Left - Title */}
          <div className="flex-1">
            {/* Label */}
            <motion.div 
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-2.5 h-2.5 bg-[#e63527] rounded-sm"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
              />
              <span className="text-foreground text-sm font-medium">Selected work</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.05] tracking-[-0.03em] mb-6"
            >
              Featured projects
              <br />
              <span className="text-muted-foreground">& creative works</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground text-base max-w-lg"
            >
              We don&apos;t just build websites; we create digital experiences that resonate with users and drive long-term business growth.
            </motion.p>
          </div>

          {/* Right - Zama's Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden border-4 border-[#e63527]/20">
              <Image
                src="/images/zama-shange.jpg"
                alt="Zama Shange"
                fill
                className="object-cover object-top"
              />
            </div>
            <motion.div
              className="absolute -bottom-2 -right-2 bg-[#e63527] text-white text-xs font-medium px-3 py-1.5 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
            >
              Creator
            </motion.div>
          </motion.div>
        </div>

        {/* Projects Grid - Clean 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Card */}
              <div 
                className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5"
                style={{ background: project.gradient }}
              >
                {/* Abstract Design Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Geometric Shapes */}
                  <motion.div
                    className="absolute w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-white/10"
                    animate={{ 
                      scale: hoveredId === project.id ? 1.2 : 1,
                      rotate: hoveredId === project.id ? 45 : 0,
                    }}
                    transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                  />
                  <motion.div
                    className="absolute w-24 h-24 lg:w-36 lg:h-36 rounded-xl bg-white/20 rotate-12"
                    animate={{ 
                      scale: hoveredId === project.id ? 1.1 : 1,
                      rotate: hoveredId === project.id ? 24 : 12,
                    }}
                    transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                  />
                  <motion.div
                    className="absolute w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-white/30"
                    animate={{ 
                      scale: hoveredId === project.id ? 1.3 : 1,
                    }}
                    transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                  />
                  
                  {/* Project Title Overlay */}
                  <motion.span
                    className="absolute text-white text-4xl lg:text-6xl font-bold opacity-10"
                    animate={{ 
                      opacity: hoveredId === project.id ? 0.2 : 0.1,
                      scale: hoveredId === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title.charAt(0)}
                  </motion.span>
                </div>
                
                {/* Hover Overlay with View Button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: hoveredId === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground">
                      <path d="M5 15L15 5M15 5H8M15 5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex items-center justify-between">
                <motion.h3 
                  className="text-xl md:text-2xl font-medium text-foreground"
                  animate={{ x: hoveredId === project.id ? 8 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.div
                  animate={{ 
                    x: hoveredId === project.id ? 0 : 10,
                    opacity: hoveredId === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#e63527]">
                    <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-8 border-t border-dashed border-border flex justify-center"
        >
          <Link href="#all-cases">
            <motion.span
              className="group flex items-center gap-3 text-foreground"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-lg font-medium">All Cases</span>
              <span className="text-[#e63527] text-sm font-medium">(05)</span>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
