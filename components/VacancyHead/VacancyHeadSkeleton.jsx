import { Flex, Paper, Skeleton, Stack, Text } from '@mantine/core';

export default function VacancyHeadSkeleton() {
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
          <Skeleton height={34} width={'65%'} />
          <Skeleton height={30} circle />
        </Flex>
        <Flex direction={'row'} justify={'flex-start'} gap="xs" wrap={'wrap'}>
          <Skeleton height={21} width={'25%'} />
          <Text span inline c="gray.4" lh={'21px'} fz="md">
            •
          </Text>
          <Skeleton height={21} width={'25%'} />
        </Flex>
        <Flex
          direction={'row'}
          justify={'flex-start'}
          align={'center'}
          gap={8}
          wrap={'wrap'}
        >
          <Skeleton height={20} circle />
          <Skeleton height={16} width={'15%'} />
        </Flex>
      </Stack>
    </Paper>
  );
}
