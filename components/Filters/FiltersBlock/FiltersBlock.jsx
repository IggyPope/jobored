import { React } from 'react';
import { Button, Paper, Stack, Title } from '@mantine/core';
import FiltersHead from './FiltersHead/FiltersHead';
import CataloguesFilter from './CataloguesFilter/CataloguesFilter';
import PaymentFilter from './PaymentFilter/PaymentFilter';

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
        <Stack spacing={20}>
          <CataloguesFilter />
          <Stack spacing={8}>
            <Title order={5}>Оклад</Title>
            <PaymentFilter placeholder="От" />
            <PaymentFilter placeholder="До" />
          </Stack>
          <Button
            h={40}
            fz="xs"
            fw={500}
            styles={theme => ({
              root: {
                '&:hover': {
                  backgroundColor: theme.colors.blue[3],
                },
                '&:active': {
                  backgroundColor: theme.colors.blue[5],
                },
              },
            })}
          >
            Применить
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}
