import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Oprahomes | Calgary Real Estate & Videography</title>
        <meta name="description" content="Where Calgary's finest homes meet cinematic marketing. Videography, drone, buying/selling, branding." />
        <meta property="og:title" content="Oprahomes | Calgary Real Estate & Videography" />
        <meta property="og:description" content="Where Calgary's finest homes meet cinematic marketing." />
        <meta property="og:image" content="https://oprahomes.ca/logo.png" />
        <meta property="og:url" content="https://oprahomes.ca" />
        <meta name="robots" content="index, follow" />

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
                "https://www.youtube.com/@oprahomes"
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
