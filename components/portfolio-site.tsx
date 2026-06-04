'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FormEvent, useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { ArrowUpRight, Mail, Menu, Phone, Plus, Send, X } from 'lucide-react'
import logoImage from '@/app/zama_shange_logo.png'
import zamaPic from '@/app/zamapic.jpg'

const contact = {
  email: 'burdolar@gmail.com',
  phone: '+27736701175',
  phoneLabel: '+27 73 670 1175',
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Sonke', href: '#sonke' },
  { label: 'BDL Corp', href: '#bdl-corp' },
  { label: 'Contact', href: '#contact' },
]

const image = {
  hero: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=85',
  product: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85',
  desk: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=85',
  studio: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
  strategy: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85',
  laptop: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=900&q=85',
  media: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=85',
  founder: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85',
  cta: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85',
  insightA: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=85',
  insightB: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=85',
}

const services = [
  { title: 'Product Engineering', image: image.strategy },
  { title: 'UI/UX Design Systems', image: image.desk },
  { title: 'Digital Storytelling', image: image.media },
  { title: 'Brand Strategy', image: image.studio },
]

const story = [
  'Zama Shange was born on 20 June 2007 in Durban, South Africa. At the age of nine, he moved to Johannesburg, a transition that exposed him to a new environment and new possibilities.',
  'By the age of eleven, he developed a strong interest in computers and art. He began experimenting with digital creation, learning design, visuals, and early development skills.',
  'Around 2020, he founded BDL Corp (Burdolar), an underground creative initiative focused on social media marketing, strategy, videography, editing, and software development.',
  'BDL Corp became a foundation phase where skills were built and refined.',
  'Within it, he launched BDL News, a digital media and broadcasting branch. The project was later shut down due to legal complications.',
  'Instead of stopping, he continued building, learning, and evolving.',
  'This persistence eventually led to the creation of Sonke in 2026.',
]

const caseStudies = [
  { tag: 'Flagship', title: 'Sonke: modern digital platform and creative ecosystem' },
  { tag: 'Foundation', title: 'BDL Corp: underground creative initiative and startup phase' },
  { tag: 'Media', title: 'BDL News: digital broadcasting branch and learning chapter' },
]

const insights = [
  {
    tag: 'Founder Notes',
    date: 'June 20, 2026',
    title: 'How early experiments became the foundation for Sonke',
    image: image.insightA,
  },
  {
    tag: 'Build Log',
    date: '2026',
    title: 'Designing systems, brands, and digital experiences from South Africa',
    image: image.insightB,
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
}

function LogoMark({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image src={logoImage} alt="Zama Shange logo" className={`h-9 w-9 object-contain ${light ? '' : ''}`} priority />
      <span className="text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold leading-none tracking-[-0.025em]">Zama</span>
    </span>
  )
}

function Shell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-[calc(100%-48px)] max-w-[1400px] max-md:w-[calc(100%-32px)] max-sm:w-[calc(100%-20px)] ${className}`}>{children}</div>
}

function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-transparent bg-white/88 backdrop-blur-xl transition-colors">
      <Shell className="flex h-[90px] items-center justify-between max-lg:h-20 max-sm:h-16">
        <Link href="#home" className="text-[#101411]">
          <LogoMark />
        </Link>

        <nav className="hidden items-center gap-8 text-[17px] text-[#101411] xl:gap-10 xl:text-[18px] lg:flex">
          {navLinks.slice(0, 4).map((link, index) => (
            <Link key={link.href} href={link.href} className={index === 0 ? 'underline underline-offset-4' : 'transition-all duration-200 hover:opacity-60'}>
              {link.label}
              {index === 0 && <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={`tel:${contact.phone}`} className="text-[15px] text-[#101411] transition-all duration-200 hover:opacity-60">{contact.phoneLabel}</a>
          <a href={`mailto:${contact.email}`} className="text-[15px] text-[#101411] transition-all duration-200 hover:opacity-60">{contact.email}</a>
          <Link href="#contact" className="rounded-[8px] bg-[#101411] px-6 py-3 text-[15px] font-semibold text-white transition-transform hover:scale-[1.02]">
            Contact now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          className="grid h-10 w-10 place-items-center rounded-[8px] bg-[#101411] text-white lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </Shell>

      {open && (
        <Shell className="pb-4 lg:hidden">
          <nav className="grid gap-1.5 rounded-[10px] bg-[#101411] p-2.5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-[8px] px-3.5 py-2.5 text-[17px] font-medium text-white">
                {link.label}
              </Link>
            ))}
            <a href={`tel:${contact.phone}`} className="rounded-[8px] px-3.5 py-2.5 text-[17px] font-medium text-white/70">
              {contact.phoneLabel}
            </a>
            <a href={`mailto:${contact.email}`} className="rounded-[8px] px-3.5 py-2.5 text-[17px] font-medium text-white/70">
              {contact.email}
            </a>
          </nav>
        </Shell>
      )}
    </header>
  )
}

function HeroSection() {
  return (
    <section id="home" className="bg-white pt-[120px] max-lg:pt-28 max-sm:pt-20">
      <Shell>
        <motion.div initial="hidden" animate="visible" variants={stagger} className="grid min-h-[580px] gap-4 lg:grid-cols-[1.1fr_0.55fr_0.55fr] max-lg:min-h-0">
          <div className="flex flex-col justify-between pr-8 max-lg:pr-0">
            <motion.div variants={fadeUp}>
              <h1 className="max-w-[900px] text-[clamp(2.5rem,8vw,5.5rem)] font-normal leading-[1.05] tracking-[-0.045em] text-[#101411]">
                Building digital growth through creative systems
              </h1>
              <p className="mt-5 max-w-[800px] text-[clamp(1rem,2.5vw,1.25rem)] leading-[1.45] text-[#626262]">
                Founder of Sonke (2026), designer, developer, and creative builder shaping brands and digital experiences from South Africa to the world.
              </p>
              <Link href="#sonke" className="mt-8 inline-flex rounded-[8px] bg-[#101411] px-7 py-4 text-[16px] font-semibold text-white transition-transform hover:scale-[1.02] sm:mt-10 sm:px-9 sm:py-5 sm:text-[18px]">
                Explore Sonke
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 grid gap-6 pb-4 md:grid-cols-2 lg:mt-0">
              <div>
                <p className="text-[16px] text-[#444] sm:text-[18px]">Born 20 June 2007</p>
                <p className="mt-3 max-w-[340px] text-[17px] leading-[1.35] text-[#242424] sm:text-[19px]">Durban-born builder now based between Johannesburg and the digital world.</p>
              </div>
              <div>
                <p className="text-[18px] text-[#242424] sm:text-[20px]">Based in</p>
                <div className="mt-2 flex gap-2">
                  <div className="h-[60px] w-[60px] rounded-[6px] bg-[url('https://images.unsplash.com/photo-1576485375217-d6a95e34d043?auto=format&fit=crop&w=240&q=80')] bg-cover bg-center sm:h-[70px] sm:w-[70px]" />
                  <div className="h-[60px] w-[60px] rounded-[6px] bg-[url('https://images.unsplash.com/photo-1577948000111-9c970dfe3743?auto=format&fit=crop&w=240&q=80')] bg-cover bg-center sm:h-[70px] sm:w-[70px]" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} whileHover={{ scale: 0.992 }} className="min-h-[480px] overflow-hidden rounded-[6px] max-lg:min-h-[380px] max-sm:min-h-[280px]">
            <img src={image.hero} alt="Creative team working" className="h-full w-full object-cover" />
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-3">
            <motion.div whileHover={{ y: -4 }} className="flex min-h-[280px] flex-col justify-between rounded-[6px] bg-[#101411] p-6 text-white max-sm:min-h-[230px]">
              <p className="max-w-[300px] text-[17px] font-semibold leading-[1.35] sm:text-[19px]">
                Sonke represents the evolution of every experiment, project, and lesson before it.
              </p>
              <div>
                <p className="text-[18px] font-semibold sm:text-[20px]">Founded by Zama Shange</p>
                <p className="mt-1 text-[15px] text-white/55">Sonke, 2026</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="relative min-h-[170px] overflow-hidden rounded-[6px] max-sm:min-h-[210px]">
              <img src={image.product} alt="Digital workspace preview" className="h-full w-full object-cover" />
              <div className="absolute left-4 right-4 top-4 rounded-[4px] bg-white/85 px-4 py-3 text-center text-[15px] text-[#222] backdrop-blur-md sm:left-6 sm:right-6 sm:top-6 sm:px-5 sm:py-3 sm:text-[16px]">
                Build systems, brands, and digital experiences
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Shell>
    </section>
  )
}

function LogoStrip() {
  return (
    <section className="bg-[#f4f4f4] py-16 sm:py-20">
      <Shell className="text-center">
        <p className="text-[17px] text-[#626262] sm:text-[19px]">Ideas and disciplines behind the work</p>
        <div className="mx-auto mt-8 flex max-w-[900px] flex-wrap items-center justify-center gap-x-8 gap-y-5 text-[20px] font-bold text-[#202020] opacity-90 sm:mt-10 sm:gap-x-16 sm:gap-y-7 sm:text-[24px]">
          {['Sonke', 'BDL Corp', 'Burdolar', 'Design', 'Code'].map((item) => (
            <motion.span key={item} whileHover={{ y: -3, opacity: 0.65 }} transition={{ duration: 0.25 }}>
              {item}
            </motion.span>
          ))}
        </div>
        <div className="mx-auto mt-10 inline-flex max-w-full flex-wrap justify-center gap-2 rounded-full bg-white px-5 py-2 text-[14px] text-[#101411] shadow-sm sm:text-[16px]">
          Strategy <span className="mx-3 text-[#777]">|</span> Creative systems <span className="mx-3 text-[#777]">|</span> Digital growth
        </div>
      </Shell>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="bg-[#f4f4f4] pb-14 sm:pb-18">
      <Shell>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="text-center">
          <motion.p variants={fadeUp} className="text-[17px] text-[#202020] sm:text-[19px]">What Zama builds</motion.p>
          <motion.h2 variants={fadeUp} className="mx-auto mt-4 max-w-[900px] text-[clamp(2rem,7vw,4rem)] font-normal leading-[1.04] tracking-[-0.04em] text-[#101411]">
            Core creative and technical services
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-[640px] text-[16px] leading-[1.35] text-[#666] sm:text-[18px]">
            Practical capabilities shaped through BDL Corp, media experiments, and the evolution toward Sonke.
          </motion.p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          {services.map((service) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -5 }}
              className="group relative h-[280px] overflow-hidden rounded-[6px] bg-[#ddd] sm:h-[340px] xl:h-[380px]"
            >
              <img src={service.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-4 left-1/2 w-[calc(100%-32px)] -translate-x-1/2 rounded-[4px] bg-white px-4 py-3 text-center text-[16px] text-[#101411] shadow-sm sm:bottom-5 sm:w-auto sm:px-5 sm:text-[18px]">
                {service.title}
              </div>
            </motion.article>
          ))}
        </div>
      </Shell>
    </section>
  )
}

function StatsAboutSection() {
  return (
    <section id="about" className="bg-white py-14 sm:py-18">
      <Shell>
        <div className="grid gap-8 border-b border-[#dedede] pb-12 lg:grid-cols-3 lg:gap-10 sm:pb-14">
          {[
            ['6+', 'Years experimenting', 'From early design interests to software and brand systems.'],
            ['2026', 'Sonke founded', 'The flagship platform and creative ecosystem.'],
            ['5+', 'Disciplines combined', 'Design, development, strategy, media, and storytelling.'],
          ].map(([number, label, body]) => (
            <motion.div key={label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[6px] bg-white">
              <span className="rounded-[4px] bg-[#f4f4f4] px-3 py-1.5 text-[14px] text-[#202020] sm:text-[16px]">{label}</span>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
                <strong className="text-[36px] font-normal leading-none tracking-[-0.03em] text-[#101411] sm:text-[40px]">{number}</strong>
                <p className="max-w-[280px] text-[16px] leading-[1.35] text-[#626262] sm:text-[18px]">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-10 pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12 sm:pt-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-[17px] text-[#626262] sm:text-[19px]">About Zama</motion.p>
            <motion.h2 variants={fadeUp} className="mt-5 text-[clamp(2rem,7vw,4rem)] font-normal leading-[1.05] tracking-[-0.04em] text-[#101411]">
              Driven by curiosity. Focused on building.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-[640px] text-[16px] leading-[1.35] text-[#626262] sm:text-[19px]">
              Zama Shange is a founder, designer, developer, and creative builder whose work connects product thinking with brand, media, and software.
            </motion.p>
            <Link href="#story" className="mt-8 inline-flex rounded-[8px] bg-[#101411] px-7 py-4 text-[15px] font-semibold text-white transition-transform hover:scale-[1.02] sm:mt-10 sm:px-9 sm:py-5 sm:text-[18px]">
              More about Zama
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 0.992 }} viewport={{ once: true }} className="overflow-hidden rounded-[6px]">
            <img src={image.founder} alt="Founder workspace" className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[440px]" />
          </motion.div>
        </div>

        <div id="story" className="mt-10 grid gap-3 lg:grid-cols-2 sm:mt-12">
          {story.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ y: -3 }}
              className="rounded-[6px] border border-[#dedede] bg-white p-4 text-[15px] leading-[1.45] text-[#3d3d3d] shadow-[0_12px_30px_rgba(16,20,17,0.03)] sm:p-5 sm:text-[17px]"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </Shell>
    </section>
  )
}

function CaseStudiesSection() {
  return (
    <section id="sonke" className="bg-white py-14 sm:py-18">
      <Shell>
        <div className="flex flex-col justify-between gap-3 border-b border-[#dedede] pb-10 sm:pb-12 md:flex-row md:items-center">
          <p className="text-[16px] text-[#202020] sm:text-[18px]">Recent case studies</p>
          <Link href="#contact" className="text-[17px] underline underline-offset-4 sm:text-[19px]">
            Let's work together <ArrowUpRight className="inline h-4 w-4" />
          </Link>
        </div>

        <div>
          {caseStudies.map((item) => (
            <Link
              key={item.title}
              href={item.tag === 'Flagship' ? '#sonke-detail' : '#bdl-corp'}
              className="group grid gap-5 border-b border-[#dedede] py-10 md:grid-cols-[1fr_auto] md:items-center"
            >
              <div>
                <span className="rounded-[4px] border border-[#dedede] px-2.5 py-1 text-[13px] text-[#3d3d3d] sm:text-[15px]">{item.tag}</span>
                <h3 className="mt-4 text-[clamp(1.5rem,6vw,2.5rem)] font-normal leading-[1.08] tracking-[-0.035em] text-[#101411]">{item.title}</h3>
              </div>
              <Plus className="h-7 w-7 text-[#101411] transition-transform group-hover:rotate-90" />
            </Link>
          ))}
        </div>

        <div id="sonke-detail" className="mt-10 grid gap-5 lg:grid-cols-[0.72fr_1fr] sm:mt-12">
          <motion.div whileHover={{ y: -4 }} className="rounded-[6px] border border-[#dedede] p-5 sm:p-8">
            <h3 className="max-w-[520px] text-[clamp(1.5rem,5vw,1.8rem)] font-normal leading-[1.18] tracking-[-0.035em] text-[#101411]">
              Sonke is the flagship project: a modern digital platform and creative ecosystem founded in 2026.
            </h3>
            <div className="mt-12 flex items-center gap-2 text-[15px] text-[#626262] max-lg:mt-10 sm:mt-16 sm:text-[17px]">
              Founded by Zama Shange <Plus className="h-4 w-4 text-[#101411]" />
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 0.992 }} className="relative min-h-[260px] overflow-hidden rounded-[6px] sm:min-h-[360px]">
            <img src={image.cta} alt="Sonke workspace" className="h-full w-full object-cover" />
            <Link href="#contact" className="absolute left-1/2 top-1/2 w-[min(80%,220px)] -translate-x-1/2 -translate-y-1/2 rounded-[6px] bg-white px-6 py-4 text-center text-[16px] font-medium text-[#101411] sm:w-auto sm:px-10 sm:py-5 sm:text-[18px]">
              Explore Sonke
            </Link>
          </motion.div>
        </div>
      </Shell>
    </section>
  )
}

function BdlSection() {
  return (
    <section id="bdl-corp" className="bg-[#f4f4f4] py-14 sm:py-18">
      <Shell>
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-[17px] text-[#202020] sm:text-[19px]">Foundation era</p>
            <h2 className="mt-5 text-[clamp(2rem,7vw,4rem)] font-normal leading-[1.04] tracking-[-0.04em] text-[#101411]">BDL Corp (Burdolar)</h2>
            <p className="mt-4 max-w-[640px] text-[16px] leading-[1.35] text-[#626262] sm:text-[19px]">
              An early creative company and underground startup phase focused on marketing, strategy, videography, editing, and software development.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <motion.div whileHover={{ y: -4 }} className="rounded-[6px] bg-white p-5 sm:p-7">
            <p className="text-[18px] leading-[1.25] tracking-[-0.025em] text-[#101411] sm:text-[22px]">
              BDL Corp became the training ground where skills were built and refined before Sonke.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Marketing', 'Strategy', 'Videography', 'Editing', 'Software development'].map((item) => (
                <span key={item} className="rounded-[4px] bg-[#f4f4f4] px-3 py-1.5 text-[13px] text-[#202020] sm:text-[15px]">{item}</span>
              ))}
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -4 }} className="rounded-[6px] bg-[#101411] p-5 text-white sm:p-7">
            <p className="text-[17px] text-white/55">BDL News</p>
            <h3 className="mt-4 text-[24px] font-normal leading-[1.1] tracking-[-0.035em] sm:text-[30px]">Digital media and broadcasting branch.</h3>
            <p className="mt-5 text-[15px] leading-[1.45] text-white/65 sm:text-[17px]">
              Discontinued due to legal complications, but professionally framed as a learning chapter that strengthened Zama's understanding of media, operations, and responsibility.
            </p>
          </motion.div>
        </div>
      </Shell>
    </section>
  )
}

function InsightsSection() {
  return (
    <section className="bg-[#f4f4f4] py-14 sm:py-18">
      <Shell>
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[17px] text-[#202020] sm:text-[19px]">Founder notes</p>
            <h2 className="mt-4 text-[clamp(2rem,7vw,3.5rem)] font-normal leading-[1.05] tracking-[-0.04em] text-[#101411]">Insights & Ideas</h2>
            <p className="mt-3 max-w-[540px] text-[16px] leading-[1.35] text-[#626262] sm:text-[18px]">Notes on building, design, development, media, and the road to Sonke.</p>
          </div>
          <Link href="#contact" className="rounded-[8px] bg-[#101411] px-6 py-3.5 text-center text-[15px] font-semibold text-white transition-transform hover:scale-[1.02] sm:px-9 sm:py-4.5 sm:text-[17px]">See all notes</Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {insights.map((post) => (
            <motion.article key={post.title} whileHover={{ y: -4 }} className="grid gap-3 rounded-[6px] bg-white p-1.5 md:grid-cols-[150px_1fr] md:items-center md:gap-5">
              <img src={post.image} alt="" className="h-[140px] w-full rounded-[5px] object-cover" />
              <div className="p-4">
                <div className="flex flex-wrap gap-3 text-[14px] text-[#626262]">
                  <span className="rounded-[4px] bg-[#f4f4f4] px-2.5 py-1">{post.tag}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-4 text-[19px] leading-[1.15] tracking-[-0.03em] text-[#101411] sm:text-[22px]">{post.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </Shell>
    </section>
  )
}

function TestimonialSection() {
  return (
    <section className="bg-white py-14 sm:py-18">
      <Shell>
        <div className="text-center">
          <p className="text-[17px] text-[#202020] sm:text-[19px]">Signal</p>
          <h2 className="mx-auto mt-4 max-w-[900px] text-[clamp(2rem,7vw,3.5rem)] font-normal leading-[1.05] tracking-[-0.04em] text-[#101411]">
            Real builder, real founder energy
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-[16px] leading-[1.35] text-[#626262] sm:text-[18px]">
            From early experiments to Sonke, the work shows persistence, range, and a serious creative direction.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr_0.9fr]">
          <motion.div whileHover={{ y: -4 }} className="rounded-[6px] bg-[#101411] p-5 text-white sm:p-6">
            <h3 className="text-[19px] font-semibold">Founder trajectory</h3>
            <p className="mt-8 text-[17px] font-semibold leading-[1.35] sm:mt-12 sm:text-[19px]">A young builder moving with product taste, technical discipline, and brand instinct.</p>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:mt-14">
              <div><strong className="text-[34px] font-normal sm:text-[38px]">11</strong><p className="mt-2 text-[14px] text-white/75 sm:text-[16px]">Age when computing and art clicked</p></div>
              <div><strong className="text-[34px] font-normal sm:text-[38px]">2026</strong><p className="mt-2 text-[14px] text-white/75 sm:text-[16px]">Sonke founded</p></div>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 0.992 }} className="relative min-h-[260px] overflow-hidden rounded-[6px] sm:min-h-[340px]">
            <img src={image.laptop} alt="Workspace review" className="h-full w-full object-cover" />
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[4px] bg-white px-5 py-3 text-[15px] sm:bottom-7 sm:text-[17px]">Watch the build</span>
          </motion.div>
          <motion.div whileHover={{ y: -4 }} className="rounded-[6px] border border-[#dedede] bg-white p-5 sm:p-6">
            <div className="flex items-center gap-4">
              <Image src={zamaPic} alt="Zama Shange" className="h-11 w-11 rounded-full object-cover" />
              <div>
                <h3 className="text-[19px] font-semibold text-[#101411]">Zama Shange</h3>
                <p className="mt-0.5 text-[16px] text-[#626262]">Founder of Sonke</p>
              </div>
            </div>
            <p className="mt-12 text-[16px] leading-[1.45] text-[#626262] sm:text-[18px] lg:mt-28 max-lg:mt-10">
              Building systems, brands, and digital experiences from South Africa to the world.
            </p>
          </motion.div>
        </div>
      </Shell>
    </section>
  )
}

function ContactBand() {
  return (
    <section id="contact" className="bg-white py-14 sm:py-18">
      <Shell>
        <div className="rounded-[6px] bg-[#f4f4f4] p-1.5">
          <div className="flex flex-col gap-5 rounded-[5px] px-6 py-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[17px] text-[#202020] sm:text-[19px]">Let's discuss the next digital system, brand, or platform.</p>
              <div className="mt-2.5 flex flex-col gap-2 text-[14px] text-[#626262] sm:flex-row sm:gap-5">
                <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-[#101411]"><Mail className="h-3.5 w-3.5" /> {contact.email}</a>
                <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 hover:text-[#101411]"><Phone className="h-3.5 w-3.5" /> {contact.phoneLabel}</a>
              </div>
            </div>
            <a href={`mailto:${contact.email}`} className="rounded-[6px] bg-white px-8 py-4 text-center text-[16px] font-medium text-[#101411] transition-transform hover:scale-[1.02] sm:px-10 sm:py-4.5 sm:text-[18px]">
              Let's talk
            </a>
          </div>
        </div>
      </Shell>
    </section>
  )
}

function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
    window.setTimeout(() => setSent(false), 3500)
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-2">
      <input required name="email" type="email" placeholder="Enter email address" className="h-[48px] rounded-[6px] border border-white/15 bg-transparent px-5 text-[15px] text-white outline-none placeholder:text-white/45" />
      <button className="inline-flex h-[48px] items-center justify-center gap-2 rounded-[6px] border border-white/15 text-[15px] text-white" type="submit">
        Send <Send className="h-4 w-4" />
      </button>
      {sent && <p className="text-white/55 text-[13px]">Message captured. Add a form backend when ready.</p>}
    </form>
  )
}

function Footer() {
  return (
    <footer className="bg-[#101411] py-14 text-white">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.6fr_0.7fr]">
          <div className="flex flex-col justify-between gap-16">
            <LogoMark light />
            <div>
              <p className="text-[16px] text-white/55">Say hello to us.</p>
              <a href="mailto:hello@zamashange.co.za" className="mt-4 block text-[18px] font-semibold">hello@zamashange.co.za</a>
              <p className="mt-4 text-[18px] font-semibold">Johannesburg, South Africa</p>
            </div>
          </div>

          <div>
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <p className="mb-4 text-[15px] font-semibold text-white/45">Pages</p>
                <div className="grid gap-3.5 text-[17px] font-semibold">
                  {navLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
                </div>
              </div>
              <div>
                <p className="mb-4 text-[15px] font-semibold text-white/45">Projects</p>
                <div className="grid gap-3.5 text-[17px] font-semibold">
                  <Link href="#sonke">Sonke</Link>
                  <Link href="#bdl-corp">BDL Corp</Link>
                  <Link href="#bdl-corp">BDL News</Link>
                </div>
              </div>
              <div>
                <p className="mb-4 text-[15px] font-semibold text-white/45">Utility</p>
                <div className="grid gap-3.5 text-[17px] font-semibold">
                  <Link href="#about">Story</Link>
                  <Link href="#contact">Contact</Link>
                  <Link href="#home">Back to top</Link>
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-[120px_1fr] md:items-center">
              <h3 className="text-[22px] font-semibold leading-[1.05]">Stay informed.</h3>
              <ContactForm />
            </div>
          </div>

          <div>
            <p className="mb-4 text-[15px] font-semibold text-white/45">Recent works</p>
            <div className="grid grid-cols-2 gap-1.5">
              {[image.product, image.media, image.strategy, image.desk].map((src) => (
                <img key={src} src={src} alt="" className="h-[100px] rounded-[5px] object-cover" />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-8 text-[16px] text-white/65 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>GitHub</span>
          </div>
          <p>Designed for Zama Shange. Powered by Sonke vision.</p>
        </div>
      </Shell>
    </footer>
  )
}

export function PortfolioSite() {
  return (
    <main className="overflow-hidden bg-white text-[#101411]">
      <Navigation />
      <HeroSection />
      <LogoStrip />
      <ServicesSection />
      <StatsAboutSection />
      <CaseStudiesSection />
      <BdlSection />
      <ContactBand />
      <InsightsSection />
      <TestimonialSection />
      <Footer />
    </main>
  )
}
