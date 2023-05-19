'use client';

import apiInstance from '../apiInstance';

const vacanciesApiService = {
  getOneById: async (id) => {
    try {
      const vacancy = await apiInstance.get(`vacancies/${id}/`);
      return vacancy.data;
    } catch (error) {
      console.log(error);
    }
  },

  getMany: async (page, perPage) => {
    try {
      const vacancies = await apiInstance.get(`vacancies/`, {
        params: {
          page: page - 1,
          count: perPage,
          published: 1,
          catalogues: 33,
        },
      });

      return vacancies.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default vacanciesApiService;
