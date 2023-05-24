import { memo } from 'react';
import Link from 'next/link';
import {
  Flex,
  Paper,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import FavoriteButton from '@/components/Buttons/FavoriteButton';
import LocationIcon from '@/components/Icons/LocationIcon';
import VacancyPayment from '../common/VacancyPayment';

function VacancyCard({ vacancy }) {
  const theme = useMantineTheme();
  const smallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Link href={`/vacancies/${vacancy.id}`}>
      <Paper
        data-elem={`vacancy-${vacancy.id}`}
        radius="lg"
        p={smallScreen ? 'sm' : 'xl'}
        w="100%"
        withBorder
        sx={(theme) => ({
          // '@media not all and (pointer: coarse)': {
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover': {
              backgroundColor: theme.colors.blue[0],
            },
          },
          '&[data-with-border]': {
            border: `1px solid ${theme.colors.gray[1]}`,
          },
        })}
      >
        <Stack spacing={smallScreen ? 'xxs' : 'xs'}>
          <Flex direction="row" justify="space-between" align="center">
            <Title order={4} c={theme.primaryColor}>
              {vacancy.profession}
            </Title>
            <FavoriteButton vacancy={vacancy} />
          </Flex>
          <Flex
            direction="row"
            justify="flex-start"
            align="center"
            gap={smallScreen ? 'xxs' : 'xs'}
            wrap="wrap"
          >
            <VacancyPayment
              from={vacancy.payment_from}
              to={vacancy.payment_to}
              currency={vacancy.currency}
              titleOrder={6}
            />
            <Text span inline c="gray.4" lh="21px" fz="md">
              •
            </Text>
            <Text span inline fz="sm">
              {vacancy.type_of_work['title'] && vacancy.type_of_work['title']}
            </Text>
          </Flex>
          <Flex
            direction="row"
            justify="flex-start"
            align="center"
            gap={8}
            wrap="wrap"
          >
            <LocationIcon />
            <Text span inline>
              {vacancy.town['title']}
            </Text>
          </Flex>
        </Stack>
      </Paper>
    </Link>
  );
}

export default memo(VacancyCard);
