'use client';

import { useRouter } from 'next/router';

import { Button, Stack, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import NotFoundIcon from '../Icons/NotFoundIcon';

export default function NotFound() {
  const theme = useMantineTheme();
  const smallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const { push } = useRouter();

  return (
    <Stack spacing={32} align="center" mt={smallScreen ? 40 : 80}>
      <NotFoundIcon />
      <Title order={2} sx={smallScreen && { fontSize: '20px' }}>
        Упс, здесь еще ничего нет!
      </Title>
      <Button
        onClick={() => push('/vacancies')}
        variant="light"
        color={'blue.5'}
      >
        Поиск Вакансий
      </Button>
    </Stack>
  );
}
