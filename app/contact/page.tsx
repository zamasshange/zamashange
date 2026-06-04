import { ContentPage } from '@/components/content-page'

export default function ContactPage() {
  return (
    <ContentPage
      eyebrow="Contact"
      title="Start a conversation with Zama."
      intro="Use the direct contact details for work, partnerships, Sonke, BDL Corp, or general founder enquiries."
      body={[
        'Email: burdolar@gmail.com',
        'Phone: +27 73 670 1175',
        'For company context, this site sits under BDL Corp (Burdolar), with Sonke as the flagship public platform.',
      ]}
      primaryLink={{ label: 'Email Zama', href: 'mailto:burdolar@gmail.com', external: true }}
      secondaryLink={{ label: 'Visit Sonke', href: 'https://www.sonkestudio.co.za', external: true }}
      facts={['Johannesburg, South Africa', 'BDL Corp (Burdolar)', 'Sonke Studio', 'Founder enquiries welcome']}
    />
  )
}
