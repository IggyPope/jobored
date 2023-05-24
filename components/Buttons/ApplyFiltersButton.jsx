import { memo } from 'react';
import { Button } from '@mantine/core';

function ApplyFiltersButton({ onClick, disabled, children, ...otherProps }) {
  return (
    <Button
      {...otherProps}
      data-elem="search-button"
      onClick={onClick}
      disabled={disabled}
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
