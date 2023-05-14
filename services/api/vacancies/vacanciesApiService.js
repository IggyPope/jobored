'use client';

import clientInstance from '@/services/api/clientInstance';

const vacanciesApiService = {
  getOneById: async id => {
    const vacancy = await clientInstance.get(`/vacancies/getOneById?id=${id}`);
    return vacancy.data;
  },
};

export default vacanciesApiService;
