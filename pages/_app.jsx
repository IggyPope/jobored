import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import themeOverrides from '@/styles/themeOverrides';
import MainLayout from '@/components/Layout/MainLayout';
import { Inter } from 'next/font/google';
import FiltersContextProvider from '@/contexts/FiltersContext';
import FavoritesContextProvider from '@/contexts/FavoritesContext';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  preload: true,
});

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
      <MantineProvider
        theme={{
          fontFamily: inter.style.fontFamily,
          ...themeOverrides,
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <FavoritesContextProvider>
          <FiltersContextProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </FiltersContextProvider>
        </FavoritesContextProvider>
      </MantineProvider>
    </>
  );
}
