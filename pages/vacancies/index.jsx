import FiltersBlock from '@/components/Filters/FiltersBlock/FiltersBlock';
import { Container, Flex } from '@mantine/core';

export default function Vacancies() {
  return (
    <Container size="lg" px="lg" py={40}>
      <Flex direction="row" justify="stretch" align="flex-start" gap={28}>
        <FiltersBlock />
      </Flex>
    </Container>
  );
}
