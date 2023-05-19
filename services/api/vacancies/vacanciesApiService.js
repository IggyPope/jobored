'use client';

import apiInstance from '../apiInstance';
import { ITEMS_PER_PAGE } from '@/constants/constants';

const vacanciesApiService = {
  getOneById: async (id) => {
    try {
      const vacancy = await apiInstance.get(`vacancies/${id}/`);
      return vacancy.data;
    } catch (error) {
      console.log(error);
    }
  },

  getMany: async (queryParams) => {
    let apiParams = queryParams;
    let { page } = queryParams;

    if (page) {
      --page;
      apiParams = { ...apiParams, page };
    }

    try {
      const vacancies = await apiInstance.get(`vacancies/`, {
        params: {
          published: 1,
          count: ITEMS_PER_PAGE,
          ...apiParams,
        },
      });

      return vacancies.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default vacanciesApiService;
