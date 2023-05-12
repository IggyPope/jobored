'use client';

import { Box, Flex, Paper, Stack, Text, Title } from '@mantine/core';
import StarIcon from '@/components/Icons/StarIcon';
import LocationIcon from '../Icons/LocationIcon';

export default function VacancyHead({ vacancy }) {
  return (
    <Paper
      radius="lg"
      p="xl"
      w={'100%'}
      withBorder
      sx={theme => ({
        '&[data-with-border]': {
          border: `1px solid ${theme.colors.gray[1]}`,
        },
      })}
    >
      <Stack spacing="sm">
        <Flex direction={'row'} justify={'space-between'} align={'flex-start'}>
          <Title order={1}>{vacancy.profession}</Title>
          <StarIcon />
        </Flex>
        <Flex direction={'row'} justify={'flex-start'} gap="xs" wrap={'wrap'}>
          <Text span inline fw={700}>
            з/п
            {!vacancy.payment_from && !vacancy.payment_to
              ? ' по договорённости'
              : (vacancy.payment_from && ` от ${vacancy.payment_from}`) +
                (vacancy.payment_to && ` до ${vacancy.payment_to}`) +
                (vacancy.currency && ` ${vacancy.currency}`)}
          </Text>
          <Text span inline c="gray.4" lh={'21px'}>
            •
          </Text>
          <Text span inline>
            {vacancy.type_of_work['title'] && vacancy.type_of_work['title']}
          </Text>
        </Flex>
        <Flex direction={'row'} justify={'flex-start'} gap={8} wrap={'wrap'}>
          <LocationIcon />
          <Text span inline>
            {vacancy.town['title']}
          </Text>
        </Flex>
      </Stack>
    </Paper>
  );
}
