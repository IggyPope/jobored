'use client';

import { useEffect, useState } from 'react';
import { Container, Pagination, Stack } from '@mantine/core';

import { useFavorites } from '@/contexts/FavoritesContext';

import VacancyCard from '@/components/Vacancy/VacancyCard/VacancyCard';

import { ITEMS_PER_PAGE } from '@/constants/constants';
import NextIcon from '@/components/Icons/NextIcon';
import NotFound from '@/components/NotFound/NotFound';

export default function Favorites() {
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
    <Container size="md" px="lg" py={40}>
      <Stack justify="space-between" spacing="xl">
        <Stack spacing="sm">
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
            position="center"
            bottom={10}
            radius="xs"
            spacing={8}
            total={Math.ceil(vacancies?.length / ITEMS_PER_PAGE)}
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
