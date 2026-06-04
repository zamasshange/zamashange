import { ContentPage } from '@/components/content-page'

export default function EarlyExperimentsPage() {
  return (
    <ContentPage
      eyebrow="Founder Notes"
      title="How early experiments became the foundation for Sonke."
      intro="The path from BDL Corp to Sonke is best understood as a sequence of practical experiments becoming a clearer platform."
      body={[
        'BDL Corp helped Zama test creative direction, media production, strategy, and software development in real conditions.',
        'Those experiments created the foundation for Sonke: a more organized ecosystem built around tools, users, career support, and useful digital systems.',
      ]}
      primaryLink={{ label: 'Explore Sonke', href: '/sonke' }}
      secondaryLink={{ label: 'View BDL Corp', href: '/bdl-corp' }}
    />
  )
}
