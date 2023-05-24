import { useEffect, useState } from 'react';
import {
  Container,
  Pagination,
  Stack,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { useFavorites } from '@/contexts/FavoritesContext';

import VacancyCard from '@/components/Vacancy/VacancyCard/VacancyCard';

import { ITEMS_PER_PAGE } from '@/constants/constants';
import NextIcon from '@/components/Icons/NextIcon';
import NotFound from '@/components/NotFound/NotFound';

export default function Favorites() {
  const theme = useMantineTheme();
  const smallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const { favorites } = useFavorites();
  const [vacancies, setVacancies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setVacancies(Object.values(favorites));
    setIsLoading(false);
  }, [favorites]);

  return (
    <Container
      size="md"
      px={smallScreen ? 'xxs' : 'lg'}
      py={smallScreen ? 'sm' : rem(40)}
      mih="calc(100vh - 84px)"
      sx={{
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      <Stack justify="space-between" spacing="sm" w="100%">
        <Stack spacing={smallScreen ? 'xs' : 'sm'}>
          {!isLoading && vacancies.length === 0 ? (
            <NotFound />
          ) : (
            vacancies
              .slice(
                (page - 1) * ITEMS_PER_PAGE,
                (page - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
              )
              .map((vacancy) => {
                return <VacancyCard key={vacancy.id} vacancy={vacancy} />;
              })
          )}
        </Stack>
        {vacancies?.length > ITEMS_PER_PAGE && (
          <Pagination
            value={page}
            onChange={setPage}
            total={Math.ceil(vacancies?.length / ITEMS_PER_PAGE)}
            size={
              smallScreen && Math.ceil(vacancies?.length / ITEMS_PER_PAGE) > 6
                ? 'xs'
                : 'md'
            }
            position="center"
            mb={4}
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
        )}
      </Stack>
    </Container>
  );
}
