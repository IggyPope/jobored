import { TextInput, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import ApplyFiltersButton from '../../Buttons/ApplyFiltersButton';
import SearchIcon from '@/components/Icons/SearchIcon';
import { memo } from 'react';
import useStyles from './styles';

function KeyWordFilter({ value, onChange, onSubmit, disabled }) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const smallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <TextInput
      data-elem="search-input"
      value={value}
      onChange={onChange}
      onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
      disabled={disabled}
      placeholder={
        smallScreen ? 'Название вакансии' : 'Введите название вакансии'
      }
      size={smallScreen ? 'xs' : 'sm'}
      w="100%"
      icon={<SearchIcon />}
      rightSection={
        <ApplyFiltersButton
          onClick={onSubmit}
          disabled={disabled}
          h={32}
          px="md"
        >
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
