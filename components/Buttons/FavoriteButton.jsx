'use client';

import { useState } from 'react';
import { ActionIcon } from '@mantine/core';
import { useHover } from '@mantine/hooks';

import { useFavorites } from '@/contexts/FavoritesContext';

import StarIcon from '../Icons/StarIcon';

export default function FavoriteButton({ vacancy }) {
  const { addFavorite, removeFavorite, checkFavorite } = useFavorites();

  const [isFavorite, setIsFavorite] = useState(checkFavorite(vacancy.id));

  const { hovered, ref } = useHover();

  const handleClick = (e) => {
    e.preventDefault();

    if (!isFavorite) {
      addFavorite(vacancy);
    } else {
      removeFavorite(vacancy.id);
    }

    setIsFavorite((prevValue) => !prevValue);
  };

  return (
    <ActionIcon variant="transparent" ref={ref} onClick={(e) => handleClick(e)}>
      <StarIcon hovered={hovered} isFavorite={isFavorite} />
    </ActionIcon>
  );
}
