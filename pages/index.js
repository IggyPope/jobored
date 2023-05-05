import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jobored</title>
        <meta
          name="description"
          content="Created by Igor Vakulchik for Paralect Startup Summer 2023"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className={inter.className}></main>
    </>
  );
}
