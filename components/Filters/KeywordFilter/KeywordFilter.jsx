import { TextInput, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import ApplyFiltersButton from '../../Buttons/ApplyFiltersButton';
import SearchIcon from '@/components/Icons/SearchIcon';
import { memo } from 'react';

function KeyWordFilter({ value, onChange, onSubmit, disabled }) {
  const theme = useMantineTheme();
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
      styles={(theme) => ({
        input: {
          fontSize: '14px',
          height: '48px',
          padding: '8px 12px',
          border: `1px solid ${theme.colors.gray[1]}`,
          '&::placeholder': {
            color: theme.colors.gray[3],
          },
        },
        icon: {
          color: theme.colors.gray[3],
        },
        rightSection: {
          paddingRight: '12px',
          justifyContent: 'flex-end',
        },
        wrapper: {
          //need this to disable hover on non-touch devices
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover>input': {
              border: `1px solid ${theme.colors.blue[4]}`,
            },
          },
        },
      })}
    />
  );
}

export default memo(KeyWordFilter);
