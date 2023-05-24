import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Container, Stack, rem, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import VacancyHead from '@/components/Vacancy/VacancyHead/VacancyHead';
import VacancyHeadSkeleton from '@/components/Vacancy/VacancyHead/VacancyHeadSkeleton';
import VacancyBody from '@/components/Vacancy/VacancyBody/VacancyBody';

import vacanciesApiService from '@/services/api/vacancies/vacanciesApiService';
import VacancyBodySkeleton from '@/components/Vacancy/VacancyBody/VacancyBodySkeleton';
import NotFound from '@/components/NotFound/NotFound';

export default function Vacancy() {
  const theme = useMantineTheme();
  const smallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

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
    <Container
      size="md"
      px={smallScreen ? 'xxs' : 'lg'}
      py={smallScreen ? 'sm' : rem(40)}
    >
      <Stack spacing={smallScreen ? 'xs' : 'md'}>
        {!isLoading && vacancy && (
          <>
            <VacancyHead vacancy={vacancy} />
            <VacancyBody vacancy={vacancy} />
          </>
        )}
        {isLoading && (
          <>
            <VacancyHeadSkeleton />
            <VacancyBodySkeleton />
          </>
        )}
        {!isLoading && !vacancy && <NotFound />}
      </Stack>
    </Container>
  );
}
