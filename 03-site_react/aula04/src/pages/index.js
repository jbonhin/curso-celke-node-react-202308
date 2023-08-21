import Head from 'next/head';
import Menu from '@/components/Menu';
import HomeTop from '@/components/HomeTop';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aula04 - Home</title>
        <meta name="description" content="Site ...sobre ..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Menu />
        <HomeTop />
      </main>
    </>
  )
}
