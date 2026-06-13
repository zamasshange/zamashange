import { ContentPage } from '@/components/content-page'

export default function BdlNewsPage() {
  return (
    <ContentPage
      eyebrow="BDL News"
      title="Digital media — officially back online."
      intro="BDL News is active again at bdlnews.online — a digital media and broadcasting platform connected to the BDL Corp ecosystem and Zama Shange's creative journey."
      body={[
        'After an earlier chapter shaped by legal and operational lessons, BDL News has returned with a clearer editorial direction — news, culture, and stories built for a modern audience.',
        'The platform sits alongside Sonke and BDL Corp as part of a wider creative systems story: media, product, and brand work growing from the same founder energy.',
        'Visit bdlnews.online for the live site, latest coverage, and the current direction of the BDL News brand.',
      ]}
      primaryLink={{ label: 'Visit bdlnews.online', href: 'https://bdlnews.online', external: true }}
      secondaryLink={{ label: 'View BDL Corp', href: '/bdl-corp' }}
      facts={['Live at bdlnews.online', 'Digital media & broadcasting', 'Part of the BDL Corp ecosystem', 'Founded by Zama Shange']}
    />
  )
}
