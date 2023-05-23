import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {
  Container,
  Flex,
  Pagination,
  Stack,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import FiltersBlock from '@/components/Filters/FiltersBlock/FiltersBlock';
import KeyWordFilter from '@/components/Filters/KeywordFilter/KeywordFilter';
import vacanciesApiService from '@/services/api/vacancies/vacanciesApiService';
import VacancyCard from '@/components/Vacancy/VacancyCard/VacancyCard';
import VacancyCardSkeleton from '@/components/Vacancy/VacancyCard/VacancyCardSkeleton';
import NextIcon from '@/components/Icons/NextIcon';
import NotFound from '@/components/NotFound/NotFound';

import { ITEMS_PER_PAGE, MAX_TOTAL_ITEMS } from '@/constants/constants';
import cleanUpQueryParams from '@/utils/cleanUpQueryParams';

export default function Vacancies() {
  const theme = useMantineTheme();
  const smallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const router = useRouter();

  const [vacancies, setVacancies] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [catalogue, setCatalogue] = useState(null);
  const [paymentFrom, setPaymentFrom] = useState('');
  const [paymentTo, setPaymentTo] = useState('');
  const [keyword, setKeyword] = useState('');

  const [page, setPage] = useState(1);

  //fetch data and set filter states on page reload
  useEffect(() => {
    setIsLoading(true);
    router.isReady &&
      vacanciesApiService
        .getMany(router.query)
        .then((res) => setVacancies(res))
        .then(() => {
          setPage(Number(router.query.page) || 1);
          setCatalogue(router.query.catalogues?.toString() || null);
          setPaymentFrom(Number(router.query.payment_from) || '');
          setPaymentTo(Number(router.query.payment_to) || '');
          setKeyword(router.query.keyword ?? '');
        })
        .finally(() => setIsLoading(false));
  }, [router]);

  const applyFilters = () => {
    setPage(1);

    const newQuery = {
      ...router.query,
      page: 1,
      keyword: keyword,
      catalogues: catalogue,
      payment_from: paymentFrom,
      payment_to: paymentTo,
    };

    const cleanRouterQuery = cleanUpQueryParams(newQuery);

    router.push(
      {
        pathname: router.pathname,
        query: {
          ...cleanRouterQuery,
        },
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

  const resetFilters = () => {
    const newQuery = {
      page: 1,
      keyword: keyword,
    };

    const cleanRouterQuery = cleanUpQueryParams(newQuery);

    router.push(
      {
        pathname: router.pathname,
        query: {
          ...cleanRouterQuery,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <Container
      size="lg"
      px={smallScreen ? 'xxs' : 'lg'}
      py={smallScreen ? 'sm' : rem(40)}
    >
      <Flex
        direction={smallScreen ? 'column' : 'row'}
        justify="stretch"
        align="flex-start"
        gap={smallScreen ? 'xs' : 'xxl'}
      >
        <FiltersBlock
          catalogueValue={catalogue}
          onCatalogueChange={setCatalogue}
          paymentFrom={paymentFrom}
          onPaymentFromChange={setPaymentFrom}
          paymentTo={paymentTo}
          onPaymentToChange={setPaymentTo}
          applyFilters={applyFilters}
          resetFilters={resetFilters}
          disabled={isLoading}
        />
        <Container w="100%" maw={773} p={0}>
          <Stack w="100%" spacing={smallScreen ? 'xs' : 'sm'} justify="center">
            <KeyWordFilter
              value={keyword}
              onChange={(e) => setKeyword(e.currentTarget.value)}
              onSubmit={applyFilters}
              disabled={isLoading}
            />
            {!isLoading &&
              vacancies &&
              vacancies.objects.map((vacancy) => {
                return <VacancyCard key={vacancy.id} vacancy={vacancy} />;
              })}
            {!isLoading && !vacancies.objects?.length && <NotFound />}
            {isLoading && (
              <>
                <VacancyCardSkeleton />
                <VacancyCardSkeleton />
                <VacancyCardSkeleton />
                <VacancyCardSkeleton />
              </>
            )}
            <Pagination
              value={+page ?? 1}
              defaultValue={1}
              total={
                Math.min(vacancies?.total ?? MAX_TOTAL_ITEMS, MAX_TOTAL_ITEMS) /
                ITEMS_PER_PAGE
              }
              onChange={handlePageChange}
              disabled={isLoading}
              size={smallScreen ? 'xs' : 'md'}
              mt={smallScreen ? 'none' : 'xl'}
              position="center"
              radius="xs"
              spacing={smallScreen ? 4 : 'xxs'}
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
