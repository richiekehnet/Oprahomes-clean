import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Page Title & Meta */}
        <title>Oprahomes | Where the Finest Homes Meet Cinematic Marketing</title>
        <meta name="description" content="Where Calgary's finest homes meet cinematic marketing. Videography, drone, buying/selling, branding." />
        <meta name="robots" content="index, follow" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/preview-image.png" />
        <link rel="apple-touch-icon" href="/preview-image.png" />

        {/* Open Graph / Facebook / Instagram */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Oprahomes | Where the Finest Homes Meet Cinematic Marketing" />
        <meta property="og:description" content="Cinematic real estate videos, drone footage, branding, and expert buying/selling guidance in Calgary." />
        <meta property="og:image" content="https://oprahomes.ca/preview-image.png" />
        <meta property="og:url" content="https://oprahomes.ca" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oprahomes | Where the Finest Homes Meet Cinematic Marketing" />
        <meta name="twitter:description" content="Cinematic real estate videos, drone footage, branding, and expert buying/selling guidance in Calgary." />
        <meta name="twitter:image" content="https://oprahomes.ca/preview-image.png" />
        <meta name="twitter:site" content="@oprahomes" />

        {/* TikTok / Other Social */}
        <meta name="tiktok:card" content="summary_large_image" />
        <meta name="tiktok:title" content="Oprahomes | Where the Finest Homes Meet Cinematic Marketing" />
        <meta name="tiktok:description" content="Cinematic real estate videos, drone footage, branding, and expert buying/selling guidance in Calgary." />
        <meta name="tiktok:image" content="https://oprahomes.ca/preview-image.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Oprahomes",
              "url": "https://oprahomes.ca",
              "logo": "https://oprahomes.ca/preview-image.png",
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
