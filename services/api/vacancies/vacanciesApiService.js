'use client';

import apiInstance from '../apiInstance';

const vacanciesApiService = {
  getOneById: async id => {
    try {
      const vacancy = await apiInstance.get(`vacancies/${id}/`);
      return vacancy.data;
    } catch (error) {
      console.log(error);
    }
  },

  getMany: async filters => {
    try {
      const vacancies = await apiInstance.get(`vacancies/`, {
        params: {
          published: 1,
          count: 4,
          page: 0,
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
