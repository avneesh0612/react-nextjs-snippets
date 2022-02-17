import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { NextSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="React & Next.js snippets"
        titleTemplate="React & Next.js snippets"
        defaultTitle="React & Next.js snippets"
        description="This is a Visual Studio Code extension that gives you many React and Next.js snippets with typescript support so you don't have to rewrite the same code over and over again 😉"
        openGraph={{
          url: 'https://react-nextjs-snippets.netlify.app/',
          title: 'React & Next.js snippets',
          description:
            "This is a Visual Studio Code extension that gives you many React and Next.js snippets with typescript support so you don't have to rewrite the same code over and over again 😉",
          images: [
            {
              url: '/assests/og.png',
              width: 800,
              height: 420,
              alt: 'React & Next.js snippets',
            },
          ],
        }}
        twitter={{
          handle: '@avneesh0612',
          site: '@avneesh0612',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
