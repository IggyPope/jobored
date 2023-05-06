import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import themeOverrides from '@/styles/themeOverrides';
import { useRouter } from 'next/router';
import { capitalizeFirst } from '@/lib/helpers';
import MainLayout from '@/components/Layout/MainLayout';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const segment = router.pathname.split('/')[1];
  const isHome = segment === '';

  return (
    <>
      <Head>
        <title>
          {(isHome ? '' : capitalizeFirst(segment) + ' | ') + 'Jobored'}
        </title>
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
