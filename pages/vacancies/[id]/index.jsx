import { Container, Flex, Paper } from '@mantine/core';

export default function Vacancy() {
  return (
    <Container size="md" px="lg" mt={40}>
      <Flex direction="row" align="flex-start" justify="stretch" gap="md">
        <Paper radius="lg" p="xl" withBorder={true} sx={{ width: '100%' }}>
          <p>Менеджер-дизайнер</p>
          <p>з/п от 70000 rub * Полный рабочий день</p>
          <p>Новый Уренгой</p>
        </Paper>
      </Flex>
    </Container>
  );
}
