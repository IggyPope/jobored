import { React } from 'react';
import { Button, Paper, Stack, Title } from '@mantine/core';
import FiltersHead from './FiltersHead/FiltersHead';
import CataloguesFilter from './CataloguesFilter/CataloguesFilter';
import PaymentFilter from './PaymentFilter/PaymentFilter';

export default function FiltersBlock({
  catalogueValue,
  onCatalogueChange,
  paymentFrom,
  onPaymentFromChange,
  paymentTo,
  onPaymentToChange,
  applyFilters,
  resetFilters,
  disabled,
}) {
  return (
    <Paper
      p={20}
      radius="lg"
      withBorder
      sx={(theme) => ({
        width: '315px',
        minWidth: '260px',
        [theme.fn.smallerThan('sm')]: {
          width: '100%',
        },
        '&[data-with-border]': {
          border: `1px solid ${theme.colors.gray[1]}`,
        },
      })}
    >
      <Stack spacing={32}>
        <FiltersHead resetFilters={resetFilters} />
        <Stack spacing={20}>
          <CataloguesFilter
            value={catalogueValue}
            onChange={onCatalogueChange}
            disabled={disabled}
          />
          <Stack spacing={8}>
            <Title order={5}>Оклад</Title>
            <PaymentFilter
              value={paymentFrom}
              onChange={onPaymentFromChange}
              disabled={disabled}
              placeholder="От"
            />
            <PaymentFilter
              value={paymentTo}
              onChange={onPaymentToChange}
              disabled={disabled}
              placeholder="До"
            />
          </Stack>
          <Button
            onClick={applyFilters}
            disabled={disabled}
            h={40}
            fz="xs"
            fw={500}
            styles={(theme) => ({
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
