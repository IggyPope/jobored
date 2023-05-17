import { Button } from '@mantine/core';
import ResetIcon from '@/components/icons/ResetIcon';

export default function ResetFiltersButton() {
  return (
    <Button
      compact
      variant="white"
      rightIcon={<ResetIcon />}
      styles={theme => ({
        root: {
          padding: 0,
          height: 'auto',
          border: 'none',
          fontSize: theme.fontSizes.xs,
          lineHeight: theme.fontSizes.md,
          fontWeight: 500,
          color: theme.colors.gray[3],
          '&:hover': {
            color: theme.colors.blue[3],
          },
          '&:active': {
            color: theme.colors.blue[4],
          },
        },
        rightIcon: {
          marginLeft: '4px',
        },
      })}
    >
      Сбросить все
    </Button>
  );
}
