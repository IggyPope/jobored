import { Paper, TypographyStylesProvider } from '@mantine/core';

export default function VacancyBody({ vacancy }) {
  return (
    <TypographyStylesProvider fz="sm">
      <Paper
        radius="lg"
        p="xl"
        w={'100%'}
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
