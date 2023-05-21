import { ActionIcon } from '@mantine/core';
import { useDisclosure, useHover } from '@mantine/hooks';
import favoriteVacanciesService from '@/services/localStorage/favoriteVacanciesService';
import StarIcon from '../Icons/StarIcon';

export default function FavoriteButton({ vacancy }) {
  const [isFavorite, isFavoriteHandler] = useDisclosure(
    favoriteVacanciesService.checkFavorite(vacancy.id)
  );
  const { hovered, ref } = useHover();

  const handleClick = (e) => {
    e.preventDefault();
    isFavoriteHandler.toggle();
    if (isFavorite) {
      favoriteVacanciesService.removeFavorite(vacancy.id);
    } else {
      favoriteVacanciesService.addFavorite(vacancy);
    }
  };

  return (
    <ActionIcon variant="transparent" ref={ref} onClick={(e) => handleClick(e)}>
      <StarIcon hovered={hovered} isFavorite={isFavorite} />
    </ActionIcon>
  );
}
