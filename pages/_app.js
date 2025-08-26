import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
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
