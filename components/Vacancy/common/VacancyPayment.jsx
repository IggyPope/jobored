import { Title } from '@mantine/core';
import { useEffect, useState } from 'react';

export default function VacancyPayment({ from, to, currency, titleOrder }) {
  const [payment, setPayment] = useState('');

  useEffect(() => {
    if (!from && !to) {
      setPayment(' по договоренности');
    } else if (!!from && !!to && from == to) {
      setPayment(` ${from} ${currency}`);
    } else if (!!from && !!to) {
      setPayment(` ${from} - ${to} ${currency}`);
    } else {
      let result = '';
      !!from && (result += ` от ${from}`);
      !!to && (result += ` до ${to}`);
      result += ` ${currency}`;

      setPayment(result);
    }
  }, [from, to, currency]);

  return <Title order={titleOrder}>з/п {payment}</Title>;
}
