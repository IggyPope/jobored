'use client';

import { memo, useState } from 'react';
import { ActionIcon } from '@mantine/core';

import { useFavorites } from '@/contexts/FavoritesContext';

import StarIcon from '../Icons/StarIcon';

function FavoriteButton({ vacancy }) {
  const { addFavorite, removeFavorite, checkFavorite } = useFavorites();

  const [isFavorite, setIsFavorite] = useState(checkFavorite(vacancy.id));

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
    <ActionIcon
      data-elem={`vacancy-${vacancy.id}-shortlist-button`}
      variant="transparent"
      onClick={(e) => handleClick(e)}
      mih={24}
      h={24}
      miw={24}
      w={24}
      sx={(theme) => ({
        border: 0,
        color: isFavorite ? theme.colors.blue[4] : theme.colors.gray[3],
        //need this to disable hover on non-touch devices
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            color: theme.colors.blue[4],
          },
        },
        '&[data-with-border]': {
          border: `1px solid ${theme.colors.gray[1]}`,
        },
      })}
    >
      <StarIcon isFavorite={isFavorite} />
    </ActionIcon>
  );
}

export default memo(FavoriteButton);
