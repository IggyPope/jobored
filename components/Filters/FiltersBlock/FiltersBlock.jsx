import { React } from 'react';
import { Paper, Stack, Title } from '@mantine/core';

import FiltersHead from './FiltersHead/FiltersHead';
import CataloguesFilter from './CataloguesFilter/CataloguesFilter';
import PaymentFilter from './PaymentFilter/PaymentFilter';
import ApplyFiltersButton from '@/components/Buttons/ApplyFiltersButton';

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
              data-elem="salary-from-input"
              value={paymentFrom}
              onChange={onPaymentFromChange}
              disabled={disabled}
              placeholder="От"
            />
            <PaymentFilter
              data-elem="salary-to-input"
              value={paymentTo}
              onChange={onPaymentToChange}
              disabled={disabled}
              placeholder="До"
            />
          </Stack>
          <ApplyFiltersButton onClick={applyFilters} disabled={disabled} h={40}>
            Применить
          </ApplyFiltersButton>
        </Stack>
      </Stack>
    </Paper>
  );
}
