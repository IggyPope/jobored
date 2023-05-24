'use client';

import { useEffect, useState } from 'react';
import { Select, Title, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import cataloguesApiService from '@/services/api/catalogues/cataloguesApiService';
import ChevronDownIcon from '@/components/Icons/ChevronDownIcon';
import useStyles from './styles';

export default function CataloguesFilter({ value, onChange, disabled }) {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  const [opened, handlers] = useDisclosure(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    cataloguesApiService.getAll().then((response) => {
      const cataloguesList = response.map((item) => ({
        value: item.key.toString(),
        label: item.title_rus,
      }));
      setList(cataloguesList);
    });
  }, []);

  return (
    <Select
      data-elem="industry-select"
      value={value}
      onChange={onChange}
      disabled={disabled}
      label={
        <Title order={5} mb={8} color={theme.black}>
          Отрасль
        </Title>
      }
      placeholder="Выберите отрасль"
      onDropdownOpen={handlers.open}
      onDropdownClose={handlers.close}
      searchable
      nothingFound="Ничего не найдено"
      rightSection={<ChevronDownIcon />}
      rightSectionWidth={36}
      data={list}
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
