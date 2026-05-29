'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FormEvent, useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { ArrowUpRight, Mail, Menu, Phone, Plus, Send, X } from 'lucide-react'
import logoImage from '@/app/zama_shange_logo.png'

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
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
}

function LogoMark({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className={`grid h-11 w-11 place-items-center overflow-hidden rounded-xl ${light ? 'bg-white' : 'bg-[#101411]'}`}>
        <Image src={logoImage} alt="Zama Shange logo" className="h-8 w-8 object-contain" priority />
      </span>
      <span className="text-[clamp(1.75rem,3vw,2.125rem)] font-semibold leading-none tracking-[-0.03em]">Zama</span>
    </span>
  )
}

function Shell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-[calc(100%-64px)] max-w-[1800px] max-md:w-[calc(100%-32px)] ${className}`}>{children}</div>
}

function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-transparent bg-white/88 backdrop-blur-xl transition-colors">
      <Shell className="flex h-[126px] items-center justify-between max-lg:h-24 max-sm:h-20">
        <Link href="#home" className="text-[#101411]">
          <LogoMark />
        </Link>

        <nav className="hidden items-center gap-10 text-[20px] text-[#101411] xl:gap-12 xl:text-[22px] lg:flex">
          {navLinks.slice(0, 4).map((link, index) => (
            <Link key={link.href} href={link.href} className={index === 0 ? 'underline underline-offset-4' : 'transition-opacity hover:opacity-60'}>
              {link.label}
              {index === 0 && <ArrowUpRight className="ml-1 inline h-4 w-4" />}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={`tel:${contact.phone}`} className="text-[19px] text-[#101411] transition-opacity hover:opacity-60">{contact.phoneLabel}</a>
          <a href={`mailto:${contact.email}`} className="text-[19px] text-[#101411] transition-opacity hover:opacity-60">{contact.email}</a>
          <Link href="#contact" className="rounded-[10px] bg-[#101411] px-7 py-4 text-[20px] font-semibold text-white transition-transform hover:scale-[1.02]">
            Contact now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          className="grid h-12 w-12 place-items-center rounded-[10px] bg-[#101411] text-white lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </Shell>

      {open && (
        <Shell className="pb-5 lg:hidden">
          <nav className="grid gap-2 rounded-[14px] bg-[#101411] p-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-[10px] px-4 py-3 text-xl font-medium text-white">
                {link.label}
              </Link>
            ))}
            <a href={`tel:${contact.phone}`} className="rounded-[10px] px-4 py-3 text-xl font-medium text-white/70">
              {contact.phoneLabel}
            </a>
            <a href={`mailto:${contact.email}`} className="rounded-[10px] px-4 py-3 text-xl font-medium text-white/70">
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
    <section id="home" className="bg-white pt-[172px] max-lg:pt-32 max-sm:pt-24">
      <Shell>
        <motion.div initial="hidden" animate="visible" variants={stagger} className="grid min-h-[730px] gap-3 lg:grid-cols-[1.06fr_0.48fr_0.48fr] max-lg:min-h-0">
          <div className="flex flex-col justify-between pr-10 max-lg:pr-0">
            <motion.div variants={fadeUp}>
              <h1 className="max-w-[980px] text-[clamp(3rem,12vw,8.7rem)] font-normal leading-[1.05] tracking-[-0.045em] text-[#101411] md:tracking-[-0.055em]">
                Building digital growth through creative systems
              </h1>
              <p className="mt-7 max-w-[920px] text-[clamp(1.05rem,3.9vw,1.375rem)] leading-[1.45] text-[#626262]">
                Founder of Sonke (2026), designer, developer, and creative builder shaping brands and digital experiences from South Africa to the world.
              </p>
              <Link href="#sonke" className="mt-10 inline-flex rounded-[10px] bg-[#101411] px-8 py-5 text-[18px] font-semibold text-white transition-transform hover:scale-[1.02] sm:mt-14 sm:px-12 sm:py-6 sm:text-[21px]">
                Explore Sonke
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-16 grid gap-8 pb-8 md:grid-cols-2 lg:mt-0">
              <div>
                <p className="text-[18px] text-[#444] sm:text-[20px]">Born 20 June 2007</p>
                <p className="mt-4 max-w-[390px] text-[19px] leading-[1.35] text-[#242424] sm:text-[22px]">Durban-born builder now based between Johannesburg and the digital world.</p>
              </div>
              <div>
                <p className="text-[20px] text-[#242424] sm:text-[22px]">Based in</p>
                <div className="mt-3 flex gap-3">
                  <div className="h-[76px] w-[76px] rounded-[7px] bg-[url('https://images.unsplash.com/photo-1576485375217-d6a95e34d043?auto=format&fit=crop&w=240&q=80')] bg-cover bg-center sm:h-[86px] sm:w-[86px]" />
                  <div className="h-[76px] w-[76px] rounded-[7px] bg-[url('https://images.unsplash.com/photo-1577948000111-9c970dfe3743?auto=format&fit=crop&w=240&q=80')] bg-cover bg-center sm:h-[86px] sm:w-[86px]" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} whileHover={{ scale: 0.992 }} className="min-h-[620px] overflow-hidden rounded-[8px] max-lg:min-h-[460px] max-sm:min-h-[340px]">
            <img src={image.hero} alt="Creative team working" className="h-full w-full object-cover" />
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-3">
            <motion.div whileHover={{ y: -6 }} className="flex min-h-[366px] flex-col justify-between rounded-[8px] bg-[#101411] p-8 text-white max-sm:min-h-[290px]">
              <p className="max-w-[360px] text-[20px] font-semibold leading-[1.35] sm:text-[22px]">
                Sonke represents the evolution of every experiment, project, and lesson before it.
              </p>
              <div>
                <p className="text-[22px] font-semibold sm:text-[24px]">Founded by Zama Shange</p>
                <p className="mt-1 text-[18px] text-white/55">Sonke, 2026</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -6 }} className="relative min-h-[216px] overflow-hidden rounded-[8px] max-sm:min-h-[260px]">
              <img src={image.product} alt="Digital workspace preview" className="h-full w-full object-cover" />
              <div className="absolute left-5 right-5 top-6 rounded-[5px] bg-white/75 px-5 py-4 text-center text-[18px] text-[#222] backdrop-blur-md sm:left-9 sm:right-9 sm:top-10 sm:px-7 sm:text-[20px]">
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
    <section className="bg-[#f4f4f4] py-24 sm:py-36">
      <Shell className="text-center">
        <p className="text-[20px] text-[#626262] sm:text-[22px]">Ideas and disciplines behind the work</p>
        <div className="mx-auto mt-12 flex max-w-[1000px] flex-wrap items-center justify-center gap-x-10 gap-y-6 text-[24px] font-bold text-[#202020] opacity-90 sm:mt-16 sm:gap-x-24 sm:gap-y-10 sm:text-[30px]">
          {['Sonke', 'BDL Corp', 'Burdolar', 'Design', 'Code'].map((item) => (
            <motion.span key={item} whileHover={{ y: -4, opacity: 0.65 }} transition={{ duration: 0.25 }}>
              {item}
            </motion.span>
          ))}
        </div>
        <div className="mx-auto mt-14 inline-flex max-w-full flex-wrap justify-center gap-2 rounded-full bg-white px-6 py-2 text-[16px] text-[#101411] shadow-sm sm:mt-20 sm:text-[18px]">
          Strategy <span className="mx-4 text-[#777]">|</span> Creative systems <span className="mx-4 text-[#777]">|</span> Digital growth
        </div>
      </Shell>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="bg-[#f4f4f4] pb-20 sm:pb-24">
      <Shell>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="text-center">
          <motion.p variants={fadeUp} className="text-[20px] text-[#202020]">What Zama builds</motion.p>
          <motion.h2 variants={fadeUp} className="mx-auto mt-6 max-w-[1000px] text-[clamp(2.7rem,11vw,6.6rem)] font-normal leading-[1.04] tracking-[-0.045em] text-[#101411] md:tracking-[-0.05em]">
            Core creative and technical services
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-[760px] text-[19px] leading-[1.35] text-[#666] sm:text-[23px]">
            Practical capabilities shaped through BDL Corp, media experiments, and the evolution toward Sonke.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 md:gap-9 xl:grid-cols-4">
          {services.map((service) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ y: -8 }}
              className="group relative h-[390px] overflow-hidden rounded-[8px] bg-[#ddd] sm:h-[460px] xl:h-[530px]"
            >
              <img src={service.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-5 left-1/2 w-[calc(100%-48px)] -translate-x-1/2 rounded-[5px] bg-white px-4 py-3 text-center text-[19px] text-[#101411] shadow-sm sm:bottom-7 sm:w-auto sm:px-6 sm:text-[22px]">
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
    <section id="about" className="bg-white py-20 sm:py-24">
      <Shell>
        <div className="grid gap-12 border-b border-[#dedede] pb-20 lg:grid-cols-3 lg:gap-16 sm:pb-24">
          {[
            ['6+', 'Years experimenting', 'From early design interests to software and brand systems.'],
            ['2026', 'Sonke founded', 'The flagship platform and creative ecosystem.'],
            ['5+', 'Disciplines combined', 'Design, development, strategy, media, and storytelling.'],
          ].map(([number, label, body]) => (
            <motion.div key={label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[8px] bg-white">
              <span className="rounded-[5px] bg-[#f4f4f4] px-4 py-2 text-[16px] text-[#202020] sm:text-[18px]">{label}</span>
              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-7">
                <strong className="text-[44px] font-normal leading-none tracking-[-0.04em] text-[#101411] sm:text-[48px]">{number}</strong>
                <p className="max-w-[330px] text-[19px] leading-[1.35] text-[#626262] sm:text-[22px]">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-12 pt-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16 sm:pt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-[20px] text-[#626262]">About Zama</motion.p>
            <motion.h2 variants={fadeUp} className="mt-7 text-[clamp(2.8rem,11vw,6.3rem)] font-normal leading-[1.05] tracking-[-0.045em] text-[#101411] md:tracking-[-0.055em]">
              Driven by curiosity. Focused on building.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 max-w-[760px] text-[19px] leading-[1.35] text-[#626262] sm:text-[23px]">
              Zama Shange is a founder, designer, developer, and creative builder whose work connects product thinking with brand, media, and software.
            </motion.p>
            <Link href="#story" className="mt-10 inline-flex rounded-[10px] bg-[#101411] px-8 py-5 text-[18px] font-semibold text-white transition-transform hover:scale-[1.02] sm:px-12 sm:py-6 sm:text-[21px]">
              More about Zama
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 0.992 }} viewport={{ once: true }} className="overflow-hidden rounded-[8px]">
            <img src={image.founder} alt="Founder workspace" className="h-[360px] w-full object-cover sm:h-[480px] lg:h-[560px]" />
          </motion.div>
        </div>

        <div id="story" className="mt-16 grid gap-4 lg:grid-cols-2 sm:mt-20">
          {story.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ y: -4 }}
              className="rounded-[8px] border border-[#dedede] bg-white p-5 text-[17px] leading-[1.45] text-[#3d3d3d] shadow-[0_18px_45px_rgba(16,20,17,0.03)] sm:p-6 sm:text-[20px]"
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
    <section id="sonke" className="bg-white py-20 sm:py-24">
      <Shell>
        <div className="flex flex-col justify-between gap-4 border-b border-[#dedede] pb-14 sm:pb-20 md:flex-row md:items-center">
          <p className="text-[19px] text-[#202020] sm:text-[20px]">Recent case studies</p>
          <Link href="#contact" className="text-[20px] underline underline-offset-4 sm:text-[22px]">
            Let's work together <ArrowUpRight className="inline h-5 w-5" />
          </Link>
        </div>

        <div>
          {caseStudies.map((item) => (
            <Link
              key={item.title}
              href={item.tag === 'Flagship' ? '#sonke-detail' : '#bdl-corp'}
              className="group grid gap-6 border-b border-[#dedede] py-16 md:grid-cols-[1fr_auto] md:items-center"
            >
              <div>
                <span className="rounded-[5px] border border-[#dedede] px-3 py-1 text-[16px] text-[#3d3d3d] sm:text-[18px]">{item.tag}</span>
                <h3 className="mt-5 text-[clamp(2rem,9vw,4rem)] font-normal leading-[1.08] tracking-[-0.04em] text-[#101411]">{item.title}</h3>
              </div>
              <Plus className="h-9 w-9 text-[#101411] transition-transform group-hover:rotate-90" />
            </Link>
          ))}
        </div>

        <div id="sonke-detail" className="mt-12 grid gap-7 lg:grid-cols-[0.72fr_1fr] sm:mt-16">
          <motion.div whileHover={{ y: -6 }} className="rounded-[8px] border border-[#dedede] p-6 sm:p-12">
            <h3 className="max-w-[620px] text-[clamp(2rem,8vw,2.5rem)] font-normal leading-[1.18] tracking-[-0.04em] text-[#101411]">
              Sonke is the flagship project: a modern digital platform and creative ecosystem founded in 2026.
            </h3>
            <div className="mt-20 flex items-center gap-3 text-[18px] text-[#626262] max-lg:mt-16 sm:mt-48 sm:text-[20px]">
              Founded by Zama Shange <Plus className="h-5 w-5 text-[#101411]" />
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 0.992 }} className="relative min-h-[340px] overflow-hidden rounded-[8px] sm:min-h-[480px]">
            <img src={image.cta} alt="Sonke workspace" className="h-full w-full object-cover" />
            <Link href="#contact" className="absolute left-1/2 top-1/2 w-[min(82%,280px)] -translate-x-1/2 -translate-y-1/2 rounded-[8px] bg-white px-8 py-5 text-center text-[19px] font-medium text-[#101411] sm:w-auto sm:px-14 sm:py-7 sm:text-[22px]">
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
    <section id="bdl-corp" className="bg-[#f4f4f4] py-20 sm:py-24">
      <Shell>
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[20px] text-[#202020]">Foundation era</p>
            <h2 className="mt-7 text-[clamp(2.7rem,11vw,6.6rem)] font-normal leading-[1.04] tracking-[-0.045em] text-[#101411] md:tracking-[-0.05em]">BDL Corp (Burdolar)</h2>
            <p className="mt-6 max-w-[760px] text-[19px] leading-[1.35] text-[#626262] sm:text-[23px]">
              An early creative company and underground startup phase focused on marketing, strategy, videography, editing, and software development.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <motion.div whileHover={{ y: -6 }} className="rounded-[8px] bg-white p-6 sm:p-10">
            <p className="text-[23px] leading-[1.25] tracking-[-0.03em] text-[#101411] sm:text-[28px]">
              BDL Corp became the training ground where skills were built and refined before Sonke.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {['Marketing', 'Strategy', 'Videography', 'Editing', 'Software development'].map((item) => (
                <span key={item} className="rounded-[5px] bg-[#f4f4f4] px-4 py-2 text-[16px] text-[#202020] sm:text-[18px]">{item}</span>
              ))}
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -6 }} className="rounded-[8px] bg-[#101411] p-6 text-white sm:p-10">
            <p className="text-[20px] text-white/55">BDL News</p>
            <h3 className="mt-6 text-[32px] font-normal leading-[1.1] tracking-[-0.04em] sm:text-[40px]">Digital media and broadcasting branch.</h3>
            <p className="mt-8 text-[18px] leading-[1.45] text-white/65 sm:text-[21px]">
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
    <section className="bg-[#f4f4f4] py-20 sm:py-28">
      <Shell>
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-[20px] text-[#202020]">Founder notes</p>
            <h2 className="mt-6 text-[clamp(2.8rem,11vw,6.2rem)] font-normal leading-[1.05] tracking-[-0.045em] text-[#101411] md:tracking-[-0.05em]">Insights & Ideas</h2>
            <p className="mt-5 max-w-[640px] text-[19px] leading-[1.35] text-[#626262] sm:text-[22px]">Notes on building, design, development, media, and the road to Sonke.</p>
          </div>
          <Link href="#contact" className="rounded-[10px] bg-[#101411] px-8 py-5 text-center text-[18px] font-semibold text-white transition-transform hover:scale-[1.02] sm:px-12 sm:py-6 sm:text-[21px]">See all notes</Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {insights.map((post) => (
            <motion.article key={post.title} whileHover={{ y: -6 }} className="grid gap-4 rounded-[8px] bg-white p-2 md:grid-cols-[190px_1fr] md:items-center md:gap-8">
              <img src={post.image} alt="" className="h-[188px] w-full rounded-[7px] object-cover" />
              <div className="p-6">
                <div className="flex flex-wrap gap-5 text-[17px] text-[#626262]">
                  <span className="rounded-[5px] bg-[#f4f4f4] px-3 py-1">{post.tag}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-6 text-[24px] leading-[1.15] tracking-[-0.035em] text-[#101411] sm:text-[28px]">{post.title}</h3>
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
    <section className="bg-white py-20 sm:py-28">
      <Shell>
        <div className="text-center">
          <p className="text-[20px] text-[#202020]">Signal</p>
          <h2 className="mx-auto mt-6 max-w-[1150px] text-[clamp(2.7rem,11vw,6.3rem)] font-normal leading-[1.05] tracking-[-0.045em] text-[#101411] md:tracking-[-0.05em]">
            Real builder, real founder energy
          </h2>
          <p className="mx-auto mt-6 max-w-[720px] text-[19px] leading-[1.35] text-[#626262] sm:text-[22px]">
            From early experiments to Sonke, the work shows persistence, range, and a serious creative direction.
          </p>
        </div>

        <div className="mt-16 grid gap-9 lg:grid-cols-[0.9fr_1.1fr_0.9fr]">
          <motion.div whileHover={{ y: -6 }} className="rounded-[8px] bg-[#101411] p-6 text-white sm:p-8">
            <h3 className="text-[24px] font-semibold">Founder trajectory</h3>
            <p className="mt-14 text-[20px] font-semibold leading-[1.35] sm:mt-20 sm:text-[22px]">A young builder moving with product taste, technical discipline, and brand instinct.</p>
            <div className="mt-16 grid grid-cols-2 gap-8 sm:mt-24">
              <div><strong className="text-[42px] font-normal sm:text-[48px]">11</strong><p className="mt-3 text-[18px] text-white/75 sm:text-[20px]">Age when computing and art clicked</p></div>
              <div><strong className="text-[42px] font-normal sm:text-[48px]">2026</strong><p className="mt-3 text-[18px] text-white/75 sm:text-[20px]">Sonke founded</p></div>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 0.992 }} className="relative min-h-[340px] overflow-hidden rounded-[8px] sm:min-h-[450px]">
            <img src={image.laptop} alt="Workspace review" className="h-full w-full object-cover" />
            <span className="absolute bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[5px] bg-white px-7 py-4 text-[18px] sm:bottom-9 sm:text-[20px]">Watch the build</span>
          </motion.div>
          <motion.div whileHover={{ y: -6 }} className="rounded-[8px] border border-[#dedede] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-5">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-[#101411] text-sm font-semibold text-white">ZS</div>
              <div>
                <h3 className="text-[24px] font-semibold text-[#101411]">Zama Shange</h3>
                <p className="mt-1 text-[19px] text-[#626262]">Founder of Sonke</p>
              </div>
            </div>
            <p className="mt-20 text-[19px] leading-[1.45] text-[#626262] sm:text-[23px] lg:mt-40 max-lg:mt-16">
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
    <section id="contact" className="bg-white py-20 sm:py-28">
      <Shell>
        <div className="rounded-[8px] bg-[#f4f4f4] p-2">
          <div className="flex flex-col gap-6 rounded-[6px] px-8 py-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[20px] text-[#202020] sm:text-[22px]">Let's discuss the next digital system, brand, or platform.</p>
              <div className="mt-3 flex flex-col gap-2 text-[17px] text-[#626262] sm:flex-row sm:gap-6">
                <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-[#101411]"><Mail className="h-4 w-4" /> {contact.email}</a>
                <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 hover:text-[#101411]"><Phone className="h-4 w-4" /> {contact.phoneLabel}</a>
              </div>
            </div>
            <a href={`mailto:${contact.email}`} className="rounded-[8px] bg-white px-10 py-5 text-center text-[20px] font-medium text-[#101411] transition-transform hover:scale-[1.02] sm:px-14 sm:py-6 sm:text-[22px]">
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
    <form onSubmit={handleSubmit} className="grid gap-3">
      <input required name="email" type="email" placeholder="Enter email address" className="h-[68px] rounded-[8px] border border-white/15 bg-transparent px-6 text-[20px] text-white outline-none placeholder:text-white/45" />
      <button className="inline-flex h-[68px] items-center justify-center gap-2 rounded-[8px] border border-white/15 text-[20px] text-white" type="submit">
        Send <Send className="h-5 w-5" />
      </button>
      {sent && <p className="text-white/55">Message captured. Add a form backend when ready.</p>}
    </form>
  )
}

function Footer() {
  return (
    <footer className="bg-[#101411] py-24 text-white">
      <Shell>
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.6fr_0.7fr]">
          <div className="flex flex-col justify-between gap-28">
            <LogoMark light />
            <div>
              <p className="text-[19px] text-white/55">Say hello to us.</p>
              <a href="mailto:hello@zamashange.co.za" className="mt-5 block text-[22px] font-semibold">hello@zamashange.co.za</a>
              <p className="mt-5 text-[22px] font-semibold">Johannesburg, South Africa</p>
            </div>
          </div>

          <div>
            <div className="grid gap-12 md:grid-cols-3">
              <div>
                <p className="mb-6 text-[18px] font-semibold text-white/45">Pages</p>
                <div className="grid gap-5 text-[22px] font-semibold">
                  {navLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
                </div>
              </div>
              <div>
                <p className="mb-6 text-[18px] font-semibold text-white/45">Projects</p>
                <div className="grid gap-5 text-[22px] font-semibold">
                  <Link href="#sonke">Sonke</Link>
                  <Link href="#bdl-corp">BDL Corp</Link>
                  <Link href="#bdl-corp">BDL News</Link>
                </div>
              </div>
              <div>
                <p className="mb-6 text-[18px] font-semibold text-white/45">Utility</p>
                <div className="grid gap-5 text-[22px] font-semibold">
                  <Link href="#about">Story</Link>
                  <Link href="#contact">Contact</Link>
                  <Link href="#home">Back to top</Link>
                </div>
              </div>
            </div>

            <div className="mt-24 grid gap-6 md:grid-cols-[160px_1fr] md:items-center">
              <h3 className="text-[28px] font-semibold leading-[1.05]">Stay informed.</h3>
              <ContactForm />
            </div>
          </div>

          <div>
            <p className="mb-5 text-[18px] font-semibold text-white/45">Recent works</p>
            <div className="grid grid-cols-2 gap-2">
              {[image.product, image.media, image.strategy, image.desk].map((src) => (
                <img key={src} src={src} alt="" className="h-[144px] rounded-[8px] object-cover" />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-6 border-t border-white/15 pt-12 text-[20px] text-white/65 md:flex-row md:items-center md:justify-between">
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
