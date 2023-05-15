import { Paper, Skeleton, Stack } from '@mantine/core';

export default function VacancyBodySkeleton() {
  return (
    <Paper
      radius="lg"
      p="xl"
      w={'100%'}
      withBorder
      sx={theme => ({
        '&[data-with-border]': {
          border: `1px solid ${theme.colors.gray[1]}`,
        },
      })}
    >
      <Skeleton height={24} width={'35%'} mb="md" />
      <Stack spacing="xs">
        <Skeleton height={20} width={'80%'} />
        <Skeleton height={20} width={'75%'} />
        <Skeleton height={20} width={'90%'} />
        <Skeleton height={20} width={'90%'} />
      </Stack>
      <Skeleton height={24} width={'35%'} my="md" />
      <Stack spacing="xs">
        <Skeleton height={20} width={'80%'} />
        <Skeleton height={20} width={'75%'} />
        <Skeleton height={20} width={'90%'} />
        <Skeleton height={20} width={'90%'} />
      </Stack>
    </Paper>
  );
}
