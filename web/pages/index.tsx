import Head from 'next/head'
import Action from '../components/Action'
import Hero from '../components/Hero'
import Installation from '../components/Installation'
import Working from '../components/Working'

export default function Home() {
  return (
    <div className="w-screen overflow-y-hidden">
      <div className="mx-auto max-w-6xl">
        <Head>
          <title>React &amp; Next.js snippets</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero />
        <Action />
        <Working />
        <Installation />
      </div>
    </div>
  )
}
