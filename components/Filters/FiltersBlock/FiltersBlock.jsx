import { Paper, Stack } from '@mantine/core';
import FiltersHead from './FiltersHead/FiltersHead';

export default function FiltersBlock() {
  return (
    <Paper
      w={315}
      p={20}
      radius="lg"
      withBorder
      sx={theme => ({
        '&[data-with-border]': {
          border: `1px solid ${theme.colors.gray[1]}`,
        },
      })}
    >
      <Stack spacing={32}>
        <FiltersHead />
      </Stack>
    </Paper>
  );
}
