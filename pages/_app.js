import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const title = "Oprahomes | Where the Finest Homes Meet Cinematic Marketing";
  const description = "Cinematic real estate videos, drone footage, branding, and expert buying/selling guidance in Calgary.";
  const url = "https://oprahomes.ca";
  const image = "https://oprahomes.ca/preview-image.png";

  return (
    <>
      <Head>
        {/* Page Title & Meta */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/preview-image.png" />
        <link rel="apple-touch-icon" href="/preview-image.png" />

        {/* Open Graph / Facebook / Instagram */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Oprahomes" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@oprahomes" />
        <meta name="twitter:creator" content="@oprahomes" />

        {/* TikTok */}
        <meta name="tiktok:card" content="summary_large_image" />
        <meta name="tiktok:title" content={title} />
        <meta name="tiktok:description" content={description} />
        <meta name="tiktok:image" content={image} />

        {/* LinkedIn */}
        <meta property="linkedin:title" content={title} />
        <meta property="linkedin:description" content={description} />
        <meta property="linkedin:image" content={image} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Oprahomes",
              "url": url,
              "logo": image,
              "sameAs": [
                "https://www.instagram.com/oprahomes",
                "https://www.youtube.com/@oprahomes",
                "https://www.tiktok.com/@oprahomes"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Calgary",
                "addressRegion": "AB",
                "postalCode": "T3K",
                "addressCountry": "CA"
              }
            })
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
