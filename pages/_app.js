import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Oprahomes | Where the finest homes meet cinematic marketing</title>
        <meta
          name="description"
          content="Where Calgary's finest homes meet cinematic marketing. Videography, drone, buying/selling, branding."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Oprahomes | Where the finest homes meet cinematic marketing" />
        <meta property="og:description" content="Cinematic marketing for Calgary real estate. Videography, drone, buying/selling, branding." />
        <meta property="og:image" content="https://oprahomes.ca/preview-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://oprahomes.ca" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oprahomes | Where the finest homes meet cinematic marketing" />
        <meta name="twitter:description" content="Cinematic marketing for Calgary real estate. Videography, drone, buying/selling, branding." />
        <meta name="twitter:image" content="https://oprahomes.ca/preview-image.png" />

        <meta name="robots" content="index, follow" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Oprahomes",
              "url": "https://oprahomes.ca",
              "logo": "https://oprahomes.ca/logo.png",
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
