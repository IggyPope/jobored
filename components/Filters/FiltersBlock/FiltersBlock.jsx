import { React, memo } from 'react';
import { Paper, Stack, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import FiltersHead from './FiltersHead/FiltersHead';
import CataloguesFilter from './CataloguesFilter/CataloguesFilter';
import PaymentFilter from './PaymentFilter/PaymentFilter';
import ApplyFiltersButton from '@/components/Buttons/ApplyFiltersButton';
import { PAYMENT_STEP } from '@/constants/constants';
import { useFilters } from '@/contexts/FiltersContext';

function FiltersBlock() {
  const theme = useMantineTheme();
  const smallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const { paymentFrom, setPaymentFrom, paymentTo, setPaymentTo, isLoading } =
    useFilters();

  return (
    <Paper
      w={smallScreen ? '100%' : '315px'}
      p={smallScreen ? 'sm' : 'md'}
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
        <FiltersHead />
        <Stack spacing={smallScreen ? 'xs' : 'md'}>
          <CataloguesFilter />
          <Stack spacing={smallScreen ? 4 : 8}>
            <Title order={5}>Оклад</Title>
            <PaymentFilter
              data-elem="salary-from-input"
              value={paymentFrom}
              min={PAYMENT_STEP}
              handleChange={setPaymentFrom}
              disabled={isLoading}
              placeholder="От"
            />
            <PaymentFilter
              data-elem="salary-to-input"
              value={paymentTo}
              min={paymentFrom === '' ? PAYMENT_STEP : paymentFrom}
              handleChange={setPaymentTo}
              disabled={isLoading}
              placeholder="До"
            />
          </Stack>
          <ApplyFiltersButton h={40}>Применить</ApplyFiltersButton>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default memo(FiltersBlock);
