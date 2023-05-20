import { Flex, Title } from '@mantine/core';
import ResetFiltersButton from './ResetFiltersButton/ResetFiltersButton';

export default function FiltersHead({ resetFilters }) {
  return (
    <Flex direction="row" justify="space-between" align="center">
      <Title order={3}>Фильтры</Title>
      <ResetFiltersButton resetFilters={resetFilters} />
    </Flex>
  );
}
