import { memo } from 'react';

import { TextInput, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import ApplyFiltersButton from '../../Buttons/ApplyFiltersButton';
import SearchIcon from '@/components/Icons/SearchIcon';
import { useFilters } from '@/contexts/FiltersContext';
import useStyles from './styles';

function KeyWordFilter() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const smallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const { keyword, setKeyword, handleApplyFilters, isLoading } = useFilters();

  return (
    <TextInput
      data-elem="search-input"
      value={keyword}
      onChange={(e) => setKeyword(e.currentTarget.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleApplyFilters()}
      disabled={isLoading}
      placeholder={
        smallScreen ? 'Название вакансии' : 'Введите название вакансии'
      }
      size={smallScreen ? 'xs' : 'sm'}
      w="100%"
      icon={<SearchIcon />}
      rightSection={
        <ApplyFiltersButton h={32} px="md">
          Поиск
        </ApplyFiltersButton>
      }
      rightSectionWidth={95}
      styles={() => ({
        input: classes.input,
        icon: classes.icon,
        rightSection: classes.rightSection,
        wrapper: classes.wrapper,
      })}
    />
  );
}

export default memo(KeyWordFilter);
