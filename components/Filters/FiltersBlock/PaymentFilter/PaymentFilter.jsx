import { useRef, useState } from 'react';
import SmallShevronDownIcon from '@/components/Icons/SmallChevronDownIcon';
import { NumberInput, Stack, useMantineTheme } from '@mantine/core';

export default function PaymentFilter({ value, onChange, ...otherProps }) {
  const theme = useMantineTheme();

  const handlers = useRef();

  function incrementHandler() {
    handlers.current.increment();
  }

  function decrementHandler() {
    handlers.current.decrement();
  }

  return (
    <NumberInput
      {...otherProps}
      hideControls
      value={value}
      onChange={(val) => onChange(val)}
      min={0}
      step={1000}
      handlersRef={handlers}
      rightSection={
        <Stack spacing={2} w={30} h="100%">
          <SmallShevronDownIcon onClick={() => incrementHandler()} />
          <SmallShevronDownIcon onClick={() => decrementHandler()} />
        </Stack>
      }
      styles={{
        rightSection: {
          width: '30px',
          '&>div>:first-of-type': {
            transform: 'rotate(180deg)',
          },
        },
        wrapper: {
          '&:hover>input': {
            border: `1px solid ${theme.colors.blue[4]}`,
          },
        },
        input: {
          border: `1px solid ${theme.colors.gray[2]}`,
          fontSize: theme.fontSizes.xs,
          '&::placeholder': {
            color: theme.colors.gray[3],
          },
        },
      }}
    />
  );
}
