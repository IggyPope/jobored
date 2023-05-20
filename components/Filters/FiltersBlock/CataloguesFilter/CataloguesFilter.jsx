'use client';

import { useEffect, useState } from 'react';
import { Select, Title, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import cataloguesApiService from '@/services/api/catalogues/cataloguesApiService';
import ChevronDownIcon from '@/components/Icons/ChevronDownIcon';

export default function CataloguesFilter({
  catalogueValue,
  onCatalogueChange,
}) {
  const theme = useMantineTheme();
  const [opened, handlers] = useDisclosure(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    cataloguesApiService.getAll().then((response) => {
      const cataloguesList = response.map((catalogue) => ({
        value: catalogue.key,
        label: catalogue.title_rus,
        short: catalogue.title_trimmed,
      }));
      setList(cataloguesList);
    });
  }, []);

  return (
    <Select
      label={
        <Title order={5} mb={8} color={theme.black}>
          Отрасль
        </Title>
      }
      placeholder="Выберите отрасль"
      value={catalogueValue}
      onChange={onCatalogueChange}
      onDropdownOpen={handlers.open}
      onDropdownClose={handlers.close}
      searchable
      nothingFound="Ничего не найдено"
      rightSection={<ChevronDownIcon />}
      rightSectionWidth={36}
      data={list}
      styles={{
        input: {
          border: `1px solid ${theme.colors.gray[2]}`,
          cursor: 'pointer',
          fontSize: theme.fontSizes.xs,
          fontWeight: 400,
          '&:hover': {
            border: `1px solid ${theme.colors.blue[4]}`,
          },
          '&::placeholder': {
            color: theme.colors.gray[3],
          },
        },
        rightSection: {
          transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
          color: opened ? theme.colors.blue[4] : theme.colors.gray[3],
          pointerEvents: 'none',
        },
        item: {
          fontSize: theme.fontSizes.xs,
          fontWeight: 400,
          padding: '8px 12px',
          '&:hover': {
            backgroundColor: theme.colors.blue[0],
          },
        },
        itemsWrapper: {
          width: '100%',
        },
        dropdown: {
          width: '1px',
        },
      }}
    />
  );
}
