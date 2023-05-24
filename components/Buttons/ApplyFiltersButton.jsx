import { memo } from 'react';
import { Button } from '@mantine/core';
import { useFilters } from '@/contexts/FiltersContext';

function ApplyFiltersButton({ children, ...otherProps }) {
  const { handleApplyFilters, isLoading } = useFilters();

  return (
    <Button
      {...otherProps}
      data-elem="search-button"
      onClick={handleApplyFilters}
      disabled={isLoading}
      fz="xs"
      fw={500}
      styles={(theme) => ({
        root: {
          border: 0,
          //need this to disable hover on non-touch devices
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover': {
              backgroundColor: theme.colors.blue[3],
            },
          },
          '&:active': {
            backgroundColor: theme.colors.blue[5],
          },
        },
      })}
    >
      {children}
    </Button>
  );
}

export default memo(ApplyFiltersButton);
