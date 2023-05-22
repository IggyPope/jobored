import { Button } from '@mantine/core';

export default function ApplyFiltersButton({
  onClick,
  disabled,
  children,
  ...otherProps
}) {
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
          '&:hover': {
            backgroundColor: theme.colors.blue[3],
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
