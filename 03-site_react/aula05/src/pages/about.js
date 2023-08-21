import Head from 'next/head';
import Menu from '@/components/Menu';

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre - Aula05</title>
        <meta name="description" content="Site ... sobre ..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <h1>Bem-vindo Aula05!</h1>
      </main>
    </>
  )
}
