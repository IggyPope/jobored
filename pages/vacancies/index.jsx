import { Container, Flex, Stack } from '@mantine/core';
import FiltersBlock from '@/components/Filters/FiltersBlock/FiltersBlock';
import KeyWordFilter from '@/components/Filters/KeywordFilter/KeywordFilter';

export default function Vacancies() {
  return (
    <Container size="lg" px="lg" py={40}>
      <Flex
        direction="row"
        justify="stretch"
        align="flex-start"
        gap={28}
        sx={theme => ({
          [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            gap: 20,
          },
        })}
      >
        <FiltersBlock />
        <Container w="100%" maw={773} p={0} mx="auto">
          <Stack w="100%" spacing="sm">
            <KeyWordFilter />
          </Stack>
        </Container>
      </Flex>
    </Container>
  );
}
