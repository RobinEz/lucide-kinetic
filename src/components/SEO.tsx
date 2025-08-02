import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
};

const SEO = ({ title, description, canonicalUrl, keywords }: SEOProps) => {
  const siteName = "Lucide"; 
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Balises Open Graph pour le partage sur les réseaux sociaux */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {/* <meta property="og:image" content="URL_DE_VOTRE_IMAGE_DE_PARTAGE" /> */}

      {/* Balises Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content="URL_DE_VOTRE_IMAGE_DE_PARTAGE" /> */}
    </Helmet>
  );
};

export default SEO; 