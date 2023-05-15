'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Container, Stack } from '@mantine/core';

import VacancyHead from '@/components/VacancyHead/VacancyHead';
import VacancyHeadSkeleton from '@/components/VacancyHead/VacancyHeadSkeleton';
import VacancyBody from '@/components/VacancyBody/VacancyBody';

import vacanciesApiService from '@/services/api/vacancies/vacanciesApiService';
import VacancyBodySkeleton from '@/components/VacancyBody/VacancyBodySkeleton';

export default function Vacancy() {
  const router = useRouter();

  const [vacancy, setVacancy] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    router.isReady &&
      vacanciesApiService
        .getOneById(router.query.id)
        .then(res => setVacancy(res))
        .finally(() => setIsLoading(false));
  }, [router]);

  return (
    <Container size="md" px="lg" my={40}>
      <Stack spacing="md">
        {isLoading && !vacancy ? (
          <>
            <VacancyHeadSkeleton />
            <VacancyBodySkeleton />
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
