import { React } from 'react';
import { Paper, Stack, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

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
  const theme = useMantineTheme();
  const smallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Paper
      w={smallScreen ? '100%' : '315px'}
      p={smallScreen ? 'sm' : 'lg'}
      radius="lg"
      withBorder
      sx={(theme) => ({
        minWidth: '260px',
        '&[data-with-border]': {
          border: `1px solid ${theme.colors.gray[1]}`,
        },
      })}
    >
      <Stack spacing={smallScreen ? 'xs' : 32}>
        <FiltersHead resetFilters={resetFilters} />
        <Stack spacing={smallScreen ? 'xs' : 'md'}>
          <CataloguesFilter
            value={catalogueValue}
            onChange={onCatalogueChange}
            disabled={disabled}
          />
          <Stack spacing={smallScreen ? 4 : 8}>
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
