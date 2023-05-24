import { React, memo } from 'react';
import { Paper, Stack, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import FiltersHead from './FiltersHead/FiltersHead';
import CataloguesFilter from './CataloguesFilter/CataloguesFilter';
import PaymentFilter from './PaymentFilter/PaymentFilter';
import ApplyFiltersButton from '@/components/Buttons/ApplyFiltersButton';
import { PAYMENT_STEP } from '@/constants/constants';

function FiltersBlock(props) {
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
        <FiltersHead resetFilters={props.resetFilters} />
        <Stack spacing={smallScreen ? 'xs' : 'md'}>
          <CataloguesFilter
            value={props.catalogueValue}
            onChange={props.handleCatalogueChange}
            disabled={props.disabled}
          />
          <Stack spacing={smallScreen ? 4 : 8}>
            <Title order={5}>Оклад</Title>
            <PaymentFilter
              data-elem="salary-from-input"
              value={props.paymentFrom}
              min={PAYMENT_STEP}
              handleChange={props.handlePaymentFromChange}
              disabled={props.disabled}
              placeholder="От"
            />
            <PaymentFilter
              data-elem="salary-to-input"
              value={props.paymentTo}
              min={props.paymentFrom === '' ? PAYMENT_STEP : props.paymentFrom}
              handleChange={props.handlePaymentToChange}
              disabled={props.disabled}
              placeholder="До"
            />
          </Stack>
          <ApplyFiltersButton
            onClick={props.applyFilters}
            disabled={props.disabled}
            h={40}
          >
            Применить
          </ApplyFiltersButton>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default memo(FiltersBlock);
