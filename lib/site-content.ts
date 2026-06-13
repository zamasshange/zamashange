import type { LucideIcon } from 'lucide-react'
import { Code2, Palette, Sparkles, TrendingUp } from 'lucide-react'

export const site = {
  name: 'Zama Shange',
  shortName: 'Zama',
  tagline: 'Building systems, brands, and digital experiences from South Africa to the world.',
  description:
    'Founder of Sonke (2026), designer, developer, and creative builder shaping brands and digital experiences from South Africa to the world.',
  url: 'https://www.zamashange.co.za',
  heroTitle: 'Building digital growth through creative systems',
  heroSubtitle:
    'Founder of Sonke (2026), designer, developer, and creative builder shaping brands and digital experiences from South Africa to the world.',
}

export const contact = {
  email: 'burdolar@gmail.com',
  helloEmail: 'hello@zamashange.co.za',
  phone: '+27736701175',
  phoneLabel: '+27 73 670 1175',
  whatsapp: '27736701175',
  location: 'Johannesburg, South Africa',
  born: 'Born 20 June 2007 · Durban',
}

export const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export const stats = [
  { value: '6+', label: 'Years experimenting', detail: 'From early design interests to software and brand systems.' },
  { value: '2026', label: 'Sonke founded', detail: 'The flagship platform and creative ecosystem.' },
  { value: '5+', label: 'Disciplines combined', detail: 'Design, development, strategy, media, and storytelling.' },
]

export const disciplines = ['Sonke', 'BDL Corp', 'BDL News', 'Burdolar', 'Design', 'Code']

export const services: {
  number: string
  title: string
  description: string
  icon: LucideIcon
}[] = [
  {
    number: '01',
    title: 'Product Engineering',
    description:
      'Websites, apps, and digital products shaped through BDL Corp experiments and the evolution toward Sonke — built for real users and real growth.',
    icon: Code2,
  },
  {
    number: '02',
    title: 'UI/UX Design Systems',
    description:
      'Cohesive visual systems and interfaces that connect brand identity with product experience — polished, flexible, and unmistakably yours.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'Digital Storytelling',
    description:
      'Media, videography, and narrative design honed through early creative work and BDL News — helping brands communicate with clarity and energy.',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'Brand Strategy',
    description:
      'Positioning, messaging, and creative direction for founders building from South Africa to the world — more than a template, a system.',
    icon: TrendingUp,
  },
]

export const approach = [
  {
    step: '01',
    title: 'Experiment boldly',
    description: 'Start with real curiosity — design, code, media, and strategy tested in the open through BDL Corp and early builds.',
  },
  {
    step: '02',
    title: 'Build with intent',
    description: 'Turn experiments into usable systems: clearer product direction, stronger brand language, and tools people can actually use.',
  },
  {
    step: '03',
    title: 'Systemize the vision',
    description: 'Connect product, brand, and storytelling into one coherent creative direction — the path that led to Sonke.',
  },
  {
    step: '04',
    title: 'Ship and grow',
    description: 'Launch platforms, refine experiences, and keep building toward digital growth from South Africa to the world.',
  },
]

export const story = [
  'Zama Shange was born on 20 June 2007 in Durban, South Africa. At the age of nine, he moved to Johannesburg, a transition that exposed him to a new environment and new possibilities.',
  'By the age of eleven, he developed a strong interest in computers and art. He began experimenting with digital creation, learning design, visuals, and early development skills.',
  'Around 2020, he founded BDL Corp (Burdolar), an underground creative initiative focused on social media marketing, strategy, videography, editing, and software development.',
  'BDL News is officially back at bdlnews.online — and Sonke, founded in 2026, continues the evolution of every experiment before it.',
]

export const ventures = [
  {
    title: 'Sonke',
    tag: 'Flagship · 2026',
    description:
      'AI tools directory, student utility platform, career ecosystem, and creative systems brand — the evolution of every experiment before it.',
    href: '/sonke',
    cta: 'Explore Sonke',
  },
  {
    title: 'BDL Corp',
    tag: 'Foundation · Burdolar',
    description:
      'Underground creative initiative focused on marketing, strategy, videography, editing, and software development — where skills were built and refined.',
    href: '/bdl-corp',
    cta: 'Learn more',
  },
  {
    title: 'BDL News',
    tag: 'Media · Active',
    description:
      'Digital media and broadcasting — officially back online at bdlnews.online, covering news, culture, and stories with a fresh editorial direction.',
    href: 'https://bdlnews.online',
    external: true,
    cta: 'Visit bdlnews.online',
  },
]

export const insights = [
  {
    tag: 'Founder Notes',
    date: 'June 20, 2026',
    title: 'How early experiments became the foundation for Sonke',
    excerpt: 'From BDL Corp experiments to the flagship platform — the story behind every build.',
    href: '/insights/early-experiments-to-sonke',
  },
  {
    tag: 'Build Log',
    date: '2026',
    title: 'Designing systems, brands, and digital experiences from South Africa',
    excerpt: 'Notes on building with product taste, technical discipline, and brand instinct.',
    href: '/insights/designing-from-south-africa',
  },
]

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'GitHub', href: 'https://www.github.com' },
]

export const footerLinks = {
  navigate: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/#services' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
  ventures: [
    { label: 'Sonke', href: '/sonke' },
    { label: 'BDL Corp', href: '/bdl-corp' },
    { label: 'BDL News', href: 'https://bdlnews.online', external: true },
    { label: 'Sonke Studio', href: 'https://www.sonkestudio.co.za', external: true },
    { label: 'Burdolar', href: 'https://burdolar.co.za', external: true },
  ],
  services: services.map((s) => ({ label: s.title, href: '/#services' })),
}
