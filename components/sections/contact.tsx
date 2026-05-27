'use client'

import { useRef, useState } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

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

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: '', email: '', projectType: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <motion.div
          className="flex items-center gap-2 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="w-2.5 h-2.5 bg-[#e63527] rounded-sm"
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 4.5 }}
          />
          <span className="text-foreground text-sm font-medium">Contact</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <div className="overflow-hidden mb-6">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.05] tracking-[-0.03em]"
              >
                <motion.span
                  className="block"
                  custom={0}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={textReveal}
                >
                  Let&apos;s start a
                </motion.span>
                <motion.span
                  className="block"
                  custom={1}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={textReveal}
                >
                  project together
                </motion.span>
              </motion.h2>
            </div>

            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              Ready to transform your vision into reality? Whether it&apos;s a new brand, 
              a digital product, or a growth strategy — let&apos;s create something 
              remarkable together.
            </motion.p>

            {/* Contact Links */}
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              {[
                {
                  href: 'mailto:burdolar@gmail.com',
                  label: 'burdolar@gmail.com',
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  href: 'tel:+27736701175',
                  label: '+27 73 670 1175',
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.35 }}
                >
                  <span className="w-9 h-9 rounded-full bg-[#f5f5f4] group-hover:bg-[#e63527] group-hover:text-white transition-colors flex items-center justify-center">
                    {item.icon}
                  </span>
                  <span className="text-base font-medium">{item.label}</span>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-[#111111] rounded-[1.75rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(17,17,17,0.12)]">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-[#e63527]/20 flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 180, damping: 16 }}
                  >
                    <svg className="w-8 h-8 text-[#e63527]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/50">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                    { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                  ].map((field, index) => (
                    <motion.div
                      key={field.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.55, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <label htmlFor={field.id} className="block text-sm font-medium text-white/70 mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        value={formState[field.id as keyof typeof formState]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.id)}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-4 py-3 rounded-xl bg-white/8 border text-white placeholder:text-white/30 focus:outline-none transition-all ${
                          focusedField === field.id ? 'border-white/40 bg-white/12' : 'border-white/10'
                        }`}
                        placeholder={field.placeholder}
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="projectType" className="block text-sm font-medium text-white/70 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formState.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/10 text-white focus:border-white/40 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                      style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                    >
                      <option value="" disabled style={{ background: '#1a1a1a' }}>Select a project type</option>
                      <option value="branding" style={{ background: '#1a1a1a' }}>Brand Identity</option>
                      <option value="web" style={{ background: '#1a1a1a' }}>Web Development</option>
                      <option value="mobile" style={{ background: '#1a1a1a' }}>Mobile App</option>
                      <option value="uiux" style={{ background: '#1a1a1a' }}>UI/UX Design</option>
                      <option value="other" style={{ background: '#1a1a1a' }}>Other</option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl bg-white/8 border text-white placeholder:text-white/30 focus:outline-none transition-all duration-300 resize-none ${
                        focusedField === 'message' ? 'border-white/40 bg-white/12' : 'border-white/10'
                      }`}
                      placeholder="Tell me about your project..."
                      style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-full bg-[#e63527] text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 hover:bg-[#d42f22]"
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </motion.svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                          <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
