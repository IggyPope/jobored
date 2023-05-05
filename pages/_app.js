import { MantineProvider } from '@mantine/core';
import themeOverrides from '@/styles/themeOverrides';

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider theme={themeOverrides} withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
