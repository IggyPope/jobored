import Link from 'next/link';
import {
  Flex,
  Paper,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import StarIcon from '@/components/Icons/StarIcon';
import LocationIcon from '@/components/Icons/LocationIcon';
import VacancyPayment from '../common/VacancyPayment';

export default function VacancyCard({ vacancy }) {
  const theme = useMantineTheme();

  return (
    <Link href={`/vacancies/${vacancy.id}`}>
      <Paper
        radius="lg"
        p="xl"
        w="100%"
        withBorder
        sx={theme => ({
          '&:hover': {
            backgroundColor: theme.colors.gray[0],
          },
          '&[data-with-border]': {
            border: `1px solid ${theme.colors.gray[1]}`,
          },
        })}
      >
        <Stack spacing="xs">
          <Flex direction="row" justify="space-between" align="center">
            <Title order={4} c={theme.primaryColor}>
              {vacancy.profession}
            </Title>
            <StarIcon />
          </Flex>
          <Flex
            direction="row"
            justify="flex-start"
            align="center"
            gap="xs"
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
