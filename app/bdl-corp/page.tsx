import { ContentPage } from '@/components/content-page'

export default function BdlCorpPage() {
  return (
    <ContentPage
      eyebrow="BDL Corp (Burdolar)"
      title="The foundation company behind the early creative work."
      intro="BDL Corp, also presented as Burdolar, is the company identity behind Zama's early creative, media, marketing, and software-building phase."
      body={[
        'BDL Corp functioned as the training ground before Sonke: a place to build practical skill across social media marketing, strategy, videography, editing, and software development.',
        'The Burdolar link for the company is burdolar.co.za. On this Zama Shange site, the footer now identifies the site as being under BDL Corp (Burdolar), as requested.',
        'BDL Corp is framed here as the foundation era rather than the final destination. It explains the path from underground creative experiments into the cleaner Sonke product ecosystem.',
      ]}
      primaryLink={{ label: 'Visit Burdolar', href: 'https://burdolar.co.za', external: true }}
      secondaryLink={{ label: 'Explore Sonke', href: '/sonke' }}
      facts={['Company: BDL Corp', 'Also known as Burdolar', 'Link: burdolar.co.za', 'Foundation before Sonke']}
    />
  )
}
