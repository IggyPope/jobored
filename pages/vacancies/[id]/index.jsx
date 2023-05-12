'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Container, Flex, Paper, Stack } from '@mantine/core';

import clientInstance from '@/services/api/clientInstance';
import VacancyHead from '@/components/VacancyHead/VacancyHead';
import VacancyBody from '@/components/VacancyBody/VacancyBody';

export default function Vacancy() {
  const router = useRouter();

  const [vacancy, setVacancy] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    router.isReady &&
      clientInstance
        .get(`/vacancies/getOneById?id=${router.query.id}`)
        .then(res => setVacancy(res.data))
        .finally(() => setIsLoading(false));
  }, [router]);

  return (
    <Container size="md" px="lg" my={40}>
      <Stack spacing="md">
        {isLoading && !vacancy ? (
          <>
            <p>Loading...</p>
            <p>Loading...</p>
            <p>Loading...</p>
          </>
        ) : (
          <>
            <VacancyHead vacancy={vacancy} />
            <VacancyBody vacancy={vacancy} />
          </>
        )}
      </Stack>
    </Container>
  );
}
