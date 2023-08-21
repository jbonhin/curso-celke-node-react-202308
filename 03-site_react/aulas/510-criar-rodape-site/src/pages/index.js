import Head from 'next/head';
import Menu from '@/components/Menu';
import HomeTop from '@/components/HomeTop';
import HomeServ from '@/components/HomeServ';
import HomePrem from '@/components/HomePrem';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Celke</title>
        <meta name="description" content="Site ... sobre ..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <HomeTop />
        <HomeServ />
        <HomePrem />
        <Footer />
      </main>
    </>
  )
}
