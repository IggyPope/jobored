'use client';

import { useEffect, useState } from 'react';
import { Select, Title, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import cataloguesApiService from '@/services/api/catalogues/cataloguesApiService';
import ChevronDownIcon from '@/components/Icons/ChevronDownIcon';
import useStyles from './styles';
import { useFilters } from '@/contexts/FiltersContext';

export default function CataloguesFilter() {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  const { catalogue, setCatalogue, isLoading } = useFilters();
  const [opened, handlers] = useDisclosure(false);
  const [cataloguesList, setCataloguesList] = useState([]);

  useEffect(() => {
    cataloguesApiService.getAll().then((response) => {
      const list = response.map((item) => ({
        value: item.key.toString(),
        label: item.title_rus,
      }));
      setCataloguesList(list);
    });
  }, []);

  return (
    <Select
      data-elem="industry-select"
      value={catalogue}
      onChange={setCatalogue}
      disabled={isLoading}
      data={cataloguesList}
      onDropdownOpen={handlers.open}
      onDropdownClose={handlers.close}
      label={
        <Title order={5} mb={8} color={theme.black}>
          Отрасль
        </Title>
      }
      placeholder="Выберите отрасль"
      searchable
      nothingFound="Ничего не найдено"
      rightSection={<ChevronDownIcon />}
      rightSectionWidth={36}
      styles={{
        input: classes.input,
        rightSection: {
          transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
          color: opened ? theme.colors.blue[4] : theme.colors.gray[3],
          pointerEvents: 'none',
        },
        item: classes.item,
        itemsWrapper: classes.itemsWrapper,
        dropdown: classes.dropdown,
      }}
    />
  );
}
