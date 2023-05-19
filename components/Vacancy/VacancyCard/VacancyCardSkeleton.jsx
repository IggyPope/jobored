import Link from 'next/link';
import {
  Flex,
  Paper,
  Skeleton,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import StarIcon from '@/components/Icons/StarIcon';
import LocationIcon from '@/components/Icons/LocationIcon';
import VacancyPayment from '../common/VacancyPayment';

export default function VacancyCardSkeleton({ vacancy }) {
  const theme = useMantineTheme();

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
      <Stack spacing="xs">
        <Flex direction="row" justify="space-between" align="center">
          <Skeleton height={25} width="65%" />
          <Skeleton height={28} circle />
        </Flex>
        <Flex
          direction="row"
          justify="flex-start"
          align="center"
          gap="xs"
          wrap="wrap"
        >
          <Skeleton height={21} width="25%" />
          <Text span inline c="gray.4" lh="21px" fz="md">
            •
          </Text>
          <Skeleton height={21} width="25%" />
        </Flex>
        <Flex
          direction="row"
          justify="flex-start"
          align="center"
          gap={8}
          wrap="wrap"
        >
          <Skeleton height={20} circle />
          <Skeleton height={16} width="15%" />
        </Flex>
      </Stack>
    </Paper>
  );
}
