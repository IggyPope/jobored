import { Button } from '@mantine/core';
import ResetIcon from '@/components/Icons/ResetIcon';

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
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 500,
          color: theme.colors.gray[3],
          '&:hover': {
            color: theme.colors.blue[3],
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
