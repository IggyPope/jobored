'use client';

import { Button, Stack, Title } from '@mantine/core';
import NotFoundIcon from '../Icons/NotFoundIcon';
import { useRouter } from 'next/router';

export default function NotFound() {
  const { push } = useRouter();

  return (
    <Stack spacing={32} align="center" mt={80}>
      <NotFoundIcon />
      <Title order={2}>Упс, здесь еще ничего нет!</Title>
      <Button
        onClick={() => push('/vacancies')}
        variant="light"
        color={'blue.5'}
        // styles={(theme) => {}}
      >
        Поиск Вакансий
      </Button>
    </Stack>
  );
}
