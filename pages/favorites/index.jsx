'use client';

import { useEffect, useState } from 'react';
import { Container } from '@mantine/core';

import { useFavorites } from '@/contexts/FavoritesContext';

import VacancyCard from '@/components/Vacancy/VacancyCard/VacancyCard';
import VacancyCardSkeleton from '@/components/Vacancy/VacancyCard/VacancyCardSkeleton';

export default function Favorites() {
  const { favorites } = useFavorites();
  const [vacancies, setVacancies] = useState();

  useEffect(() => {
    setVacancies(Object.values(favorites));
  }, [favorites]);

  // const [vacancies, setVacancies] = useState({});
  // const [page, setPage] = useState(1);

  return (
    <Container size="md" px="lg" my={40}>
      {vacancies?.length ? (
        vacancies.map((vacancy) => (
          <VacancyCard key={vacancy.id} vacancy={vacancy} />
        ))
      ) : (
        <VacancyCardSkeleton />
      )}
    </Container>
  );
}
