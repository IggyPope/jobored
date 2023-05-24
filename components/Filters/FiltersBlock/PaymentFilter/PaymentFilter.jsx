import { useRef } from 'react';
import { NumberInput, Stack, useMantineTheme } from '@mantine/core';

import SmallShevronDownIcon from '@/components/Icons/SmallChevronDownIcon';
import { PAYMENT_STEP } from '@/constants/constants';
import useStyles from './styles';

export default function PaymentFilter({
  value,
  handleChange,
  min,
  ...otherProps
}) {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  const handlers = useRef();

  function incrementHandler() {
    handlers.current.increment();
  }

  function decrementHandler() {
    value === min || value === ''
      ? handleChange('')
      : handlers.current.decrement();
  }

  return (
    <NumberInput
      {...otherProps}
      hideControls
      value={value}
      min={min}
      onChange={(val) => handleChange(val)}
      step={PAYMENT_STEP}
      handlersRef={handlers}
      rightSection={
        <Stack spacing={2} w={30} h="100%">
          <SmallShevronDownIcon onClick={() => incrementHandler()} />
          <SmallShevronDownIcon onClick={() => decrementHandler()} />
        </Stack>
      }
      styles={{
        rightSection: classes.rightSection,
        wrapper: classes.wrapper,
        input: classes.input,
      }}
    />
  );
}
