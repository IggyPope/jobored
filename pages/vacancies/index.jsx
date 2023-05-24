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
import VacancyCard from '@/components/Vacancy/VacancyCard/VacancyCard';
import VacancyCardSkeleton from '@/components/Vacancy/VacancyCard/VacancyCardSkeleton';
import NextIcon from '@/components/Icons/NextIcon';
import NotFound from '@/components/NotFound/NotFound';

import { ITEMS_PER_PAGE, MAX_TOTAL_ITEMS } from '@/constants/constants';
import { useFilters } from '@/contexts/FiltersContext';

export default function Vacancies() {
  const theme = useMantineTheme();
  const smallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const { vacancies, page, handlePageChange, isLoading } = useFilters();

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
        <FiltersBlock />
        <Container w="100%" maw={773} p={0}>
          <Stack w="100%" spacing={smallScreen ? 'xs' : 'sm'} justify="center">
            <KeyWordFilter />
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
