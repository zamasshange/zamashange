import { ContentPage } from '@/components/content-page'

export default function AboutPage() {
  return (
    <ContentPage
      eyebrow="About Zama"
      title="Founder, designer, developer, and creative builder."
      intro="Zama Shange is a South African builder whose work connects software, brand systems, media experiments, and practical digital products."
      body={[
        'Born in Durban on 20 June 2007, Zama later moved to Johannesburg, where exposure to new environments sharpened his interest in technology, art, and digital creation.',
        'At around eleven, computers and art became a serious focus. That curiosity turned into experiments across design, development, editing, social media, and product thinking.',
        'BDL Corp (Burdolar) became the foundation phase. Sonke is the more focused evolution: a public digital ecosystem for tools, career momentum, and creative systems.',
      ]}
      primaryLink={{ label: 'Explore Sonke', href: '/sonke' }}
      secondaryLink={{ label: 'Contact Zama', href: '/contact' }}
      facts={['Durban-born, Johannesburg-based', 'Founder of Sonke', 'BDL Corp (Burdolar) foundation era', 'Design, code, media, and strategy']}
    />
  )
}
