import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import themeOverrides from '@/styles/themeOverrides';
import MainLayout from '@/components/Layout/MainLayout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jobored</title>
        <meta
          name="description"
          content="Created by Igor Vakulchik for Paralect Startup Summer 2023"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <MantineProvider theme={themeOverrides} withGlobalStyles withNormalizeCSS>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MantineProvider>
    </>
  );
}
