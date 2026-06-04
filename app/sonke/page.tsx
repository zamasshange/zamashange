import { ContentPage } from '@/components/content-page'

export default function SonkePage() {
  return (
    <ContentPage
      eyebrow="Sonke"
      title="An AI tools, career, and creative systems ecosystem."
      intro="Sonke is Zama Shange's flagship platform, built around accessible AI tools, student resources, creator utilities, business tools, and career momentum for South African users and beyond."
      body={[
        'From the live Sonke site, Sonke presents itself as a compact workbench for everyday AI, PDF, study, creator, business, and developer tasks. It includes a broad tool directory with categories for students, creators, developers, businesses, and everyday utilities.',
        'Sonke also includes a Career Ecosystem for South African students, graduates, junior talent, and remote builders. The page frames itself around live opportunities, AI application help, internship discovery, cover letter support, resume feedback, and application tracking.',
        "In Zama's story, Sonke is the evolution of earlier BDL Corp experiments into a more structured public platform: practical tools, useful systems, and a sharper product identity.",
      ]}
      primaryLink={{ label: 'Visit Sonke Studio', href: 'https://www.sonkestudio.co.za', external: true }}
      secondaryLink={{ label: 'View Career Hub', href: 'https://www.sonkestudio.co.za/career', external: true }}
      facts={['AI tools directory', 'Student and creator utilities', 'Career ecosystem for South Africa', 'Founded by Zama Shange']}
    />
  )
}
