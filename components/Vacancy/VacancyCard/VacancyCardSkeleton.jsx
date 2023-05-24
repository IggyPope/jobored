import { Flex, Paper, Skeleton, Stack, Text } from '@mantine/core';

export default function VacancyCardSkeleton() {
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
          <Skeleton height={24} width="65%" />
          <Skeleton height={24} circle />
        </Flex>
        <Flex
          direction="row"
          justify="flex-start"
          align="center"
          gap="xs"
          wrap="wrap"
        >
          <Skeleton height={20} width="25%" />
          <Text span inline c="gray.4" lh="20px" fz="md">
            •
          </Text>
          <Skeleton height={20} width="25%" />
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
