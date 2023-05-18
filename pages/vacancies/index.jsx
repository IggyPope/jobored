import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Flex, Pagination, Stack } from '@mantine/core';
import FiltersBlock from '@/components/Filters/FiltersBlock/FiltersBlock';
import KeyWordFilter from '@/components/Filters/KeywordFilter/KeywordFilter';
import vacanciesApiService from '@/services/api/vacancies/vacanciesApiService';
import VacancyCard from '@/components/Vacancy/VacancyCard/VacancyCard';
import VacancyCardSkeleton from '@/components/Vacancy/VacancyCard/VacancyCardSkeleton';

export default function Vacancies() {
  const router = useRouter();

  const [vacancies, setVacancies] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    router.isReady &&
      vacanciesApiService
        .getMany()
        .then(res => setVacancies(res))
        .finally(() => setIsLoading(false));
  }, [router]);

  return (
    <Container size="lg" px="lg" py={40}>
      <Flex
        direction="row"
        justify="stretch"
        align="flex-start"
        gap={28}
        sx={theme => ({
          [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            gap: 20,
          },
        })}
      >
        <FiltersBlock />
        <Container w="100%" maw={773} p={0} mx="auto">
          <Stack w="100%" spacing="sm" justify="center">
            <KeyWordFilter />
            {!isLoading && vacancies ? (
              vacancies.objects.map(vacancy => {
                return <VacancyCard key={vacancy.id} vacancy={vacancy} />;
              })
            ) : (
              <>
                <VacancyCardSkeleton />
                <VacancyCardSkeleton />
                <VacancyCardSkeleton />
                <VacancyCardSkeleton />
              </>
            )}
            <Pagination mt={24} position="center" />
          </Stack>
        </Container>
      </Flex>
    </Container>
  );
}
