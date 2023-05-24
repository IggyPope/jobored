import { Container, rem, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import NotFound from '@/components/NotFound/NotFound';

export default function Custom404() {
  const theme = useMantineTheme();
  const smallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Container py={smallScreen ? 'sm' : rem(40)}>
      <NotFound />
    </Container>
  );
}
