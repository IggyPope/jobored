import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Container, Stack } from '@mantine/core';

import VacancyHead from '@/components/Vacancy/VacancyHead/VacancyHead';
import VacancyHeadSkeleton from '@/components/Vacancy/VacancyHead/VacancyHeadSkeleton';
import VacancyBody from '@/components/Vacancy/VacancyBody/VacancyBody';

import vacanciesApiService from '@/services/api/vacancies/vacanciesApiService';
import VacancyBodySkeleton from '@/components/Vacancy/VacancyBody/VacancyBodySkeleton';

export default function Vacancy() {
  const router = useRouter();

  const [vacancy, setVacancy] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    router.isReady &&
      vacanciesApiService
        .getOneById(router.query.id)
        .then((res) => setVacancy(res))
        .finally(() => setIsLoading(false));
  }, [router]);

  return (
    <Container size="md" px="lg" my={40}>
      <Stack spacing="md">
        {!isLoading && vacancy ? (
          <>
            <VacancyHead vacancy={vacancy} />
            <VacancyBody vacancy={vacancy} />
          </>
        ) : (
          <>
            <VacancyHeadSkeleton />
            <VacancyBodySkeleton />
          </>
        )}
      </Stack>
    </Container>
  );
}
