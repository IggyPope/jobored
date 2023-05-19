import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Flex, Pagination, Stack } from '@mantine/core';
import FiltersBlock from '@/components/Filters/FiltersBlock/FiltersBlock';
import KeyWordFilter from '@/components/Filters/KeywordFilter/KeywordFilter';
import vacanciesApiService from '@/services/api/vacancies/vacanciesApiService';
import VacancyCard from '@/components/Vacancy/VacancyCard/VacancyCard';
import VacancyCardSkeleton from '@/components/Vacancy/VacancyCard/VacancyCardSkeleton';
import { ITEMS_PER_PAGE, MAX_TOTAL_ITEMS } from '@/constants/constants';
import NextIcon from '@/components/Icons/NextIcon';

export default function Vacancies() {
  const router = useRouter();

  const [vacancies, setVacancies] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [keyword, setKeyword] = useState('');

  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    router.isReady &&
      vacanciesApiService
        .getMany(router.query)
        .then((res) => setVacancies(res))
        .finally(() => setIsLoading(false));
  }, [router, page]);

  const handleSubmit = () => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, page: 1, keyword: keyword },
      },
      undefined,
      { shallow: true }
    );
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, page: newPage },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <Container size="lg" px="lg" py={40}>
      <Flex
        direction="row"
        justify="stretch"
        align="flex-start"
        gap={28}
        sx={(theme) => ({
          [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            gap: 20,
          },
        })}
      >
        <FiltersBlock />
        <Container w="100%" maw={773} p={0} mx="auto">
          <Stack w="100%" spacing="sm" justify="center">
            <KeyWordFilter
              value={keyword}
              onChange={(e) => setKeyword(e.currentTarget.value)}
              onSubmit={handleSubmit}
            />
            {!isLoading && !!vacancies ? (
              vacancies.objects.map((vacancy) => {
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
            <Pagination
              value={page}
              onChange={handlePageChange}
              mt="xl"
              position="center"
              radius="xs"
              spacing={8}
              total={
                Math.min(vacancies?.total ?? MAX_TOTAL_ITEMS, MAX_TOTAL_ITEMS) /
                ITEMS_PER_PAGE
              }
              styles={(theme) => ({
                control: {
                  borderColor: theme.colors.gray[2],
                  fontSize: theme.fontSizes.sm,
                },
              })}
              nextIcon={NextIcon}
            />
          </Stack>
        </Container>
      </Flex>
    </Container>
  );
}
