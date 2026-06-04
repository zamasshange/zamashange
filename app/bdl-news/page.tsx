import { ContentPage } from '@/components/content-page'

export default function BdlNewsPage() {
  return (
    <ContentPage
      eyebrow="BDL News"
      title="A media and broadcasting learning chapter."
      intro="BDL News was a digital media branch connected to the BDL Corp era. It is presented as part of the founder story, not as an active media outlet."
      body={[
        'The branch explored digital media, broadcasting, publishing, and public-facing content. That made it a useful chapter for learning pace, responsibility, editing, and audience communication.',
        'The project was later shut down due to legal complications. The site keeps the wording professional and factual, positioning BDL News as a learning phase that informed later work.',
        "Its most important role in the portfolio is context: it shows how early media experiments contributed to Zama's current direction with Sonke and BDL Corp.",
      ]}
      primaryLink={{ label: 'View BDL Corp', href: '/bdl-corp' }}
      secondaryLink={{ label: 'Contact', href: '/contact' }}
      facts={['Digital media branch', 'Part of the BDL Corp era', 'No longer active', 'Learning chapter']}
    />
  )
}
