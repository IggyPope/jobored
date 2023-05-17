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
};

export default vacanciesApiService;
