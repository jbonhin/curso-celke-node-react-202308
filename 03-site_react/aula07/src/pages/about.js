import Head from 'next/head';
import Menu from '@/components/Menu';
import AboutContent from '@/components/AboutContent';

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre - Aula08</title>
        <meta name="description" content="Site ... sobre ..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <AboutContent />
      </main>
    </>
  )
}
