import { ContentPage } from '@/components/content-page'

export default function DesigningFromSouthAfricaPage() {
  return (
    <ContentPage
      eyebrow="Build Log"
      title="Designing systems, brands, and digital experiences from South Africa."
      intro="Zama's work is rooted in South Africa while building for a broader digital audience."
      body={[
        'The direction combines practical utility with a strong visual identity: AI tools, career workflows, creator resources, and business systems that people can actually use.',
        'Sonke and BDL Corp show different stages of the same direction: learning through creative work, then turning that learning into public digital products.',
      ]}
      primaryLink={{ label: 'Visit Sonke Studio', href: 'https://www.sonkestudio.co.za', external: true }}
      secondaryLink={{ label: 'Contact', href: '/contact' }}
    />
  )
}
