import { Flex, Paper, Stack, Text, Title } from '@mantine/core';
import LocationIcon from '@/components/Icons/LocationIcon';
import VacancyPayment from '../common/VacancyPayment';
import FavoriteButton from '@/components/Buttons/FavoriteButton';

export default function VacancyHead({ vacancy }) {
  return (
    <Paper
      radius="lg"
      p="xl"
      w="100%"
      withBorder
      sx={(theme) => ({
        '&[data-with-border]': {
          border: `1px solid ${theme.colors.gray[1]}`,
        },
      })}
    >
      <Stack spacing="sm">
        <Flex direction="row" justify="space-between" align="flex-start">
          <Title order={1}>{vacancy.profession}</Title>
          <FavoriteButton vacancy={vacancy} />
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
            titleOrder={3}
          />
          <Text span inline c="gray.4" lh="21px" fz="md">
            •
          </Text>
          <Text span inline fz="md">
            {vacancy.type_of_work.title && vacancy.type_of_work.title}
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
            {vacancy.town.title}
          </Text>
        </Flex>
      </Stack>
    </Paper>
  );
}
