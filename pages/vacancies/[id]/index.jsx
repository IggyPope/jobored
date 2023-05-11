import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Container, Flex, Paper, Stack } from '@mantine/core';

import clientInstance from '@/services/api/clientInstance';

export default function Vacancy() {
  const router = useRouter();

  const [vacancy, setVacancy] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    router.isReady &&
      clientInstance
        .get(`/vacancies/getOneById?id=${router.query.id}`)
        .then(res => setVacancy(res.data))
        .finally(() => setIsLoading(false));
  }, [router]);

  return (
    <Container size="md" px="lg" mt={40}>
      <Flex align="flex-start" justify="stretch" gap="md">
        <Paper radius="lg" p="xl" withBorder={true} sx={{ width: '100%' }}>
          <Stack spacing="md">
            {isLoading ? (
              <>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
              </>
            ) : (
              <>
                <p>{vacancy.profession}</p>
                <p>
                  з/п {vacancy.payment_from && `от ${vacancy.payment_from} `}{' '}
                  rub *{' '}
                  {vacancy.type_of_work['title'] &&
                    vacancy.type_of_work['title']}
                </p>
                <p>{vacancy.town['title']}</p>
              </>
            )}
          </Stack>
        </Paper>
      </Flex>
    </Container>
  );
}
