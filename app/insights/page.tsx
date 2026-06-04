import { ContentPage } from '@/components/content-page'

export default function InsightsPage() {
  return (
    <ContentPage
      eyebrow="Insights"
      title="Founder notes, build logs, and project thinking."
      intro="A dedicated place for the notes that used to be preview cards on the homepage."
      body={[
        'The insight cards now point to real pages instead of staying trapped on the homepage.',
        'These notes can grow into fuller writing about Sonke, BDL Corp, design systems, software, career tools, and digital growth.',
      ]}
      primaryLink={{ label: 'Early experiments to Sonke', href: '/insights/early-experiments-to-sonke' }}
      secondaryLink={{ label: 'Designing from South Africa', href: '/insights/designing-from-south-africa' }}
      facts={['Founder notes', 'Build logs', 'Project history', 'Digital strategy']}
    />
  )
}
