import {
  Paper,
  TypographyStylesProvider,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function VacancyBody({ vacancy }) {
  const theme = useMantineTheme();
  const smallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <TypographyStylesProvider fz="sm">
      <Paper
        radius="lg"
        p={smallScreen ? 'sm' : 'xl'}
        w="100%"
        withBorder
        sx={(theme) => ({
          '&[data-with-border]': {
            border: `1px solid ${theme.colors.gray[1]}`,
          },
        })}
        dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }}
      />
    </TypographyStylesProvider>
  );
}
