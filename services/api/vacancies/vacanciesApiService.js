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
    let apiParams = { ...queryParams };
    let { page } = queryParams;

    // Decrease page by 1, as the api pagination starts with 0
    if (page) {
      --page;
      apiParams = { ...apiParams, page: page };
    }

    // Add no_agreement param if payment is supplied in the query
    if (!!queryParams.payment_from || !!queryParams.payment_to) {
      apiParams = { ...apiParams, no_agreement: 1 };
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
