import { Title } from '@mantine/core';
import { useRouter } from 'next/router';

export default function Vacancies() {
  const router = useRouter();

  return <Title>Vacancies/{router.route}</Title>;
}
