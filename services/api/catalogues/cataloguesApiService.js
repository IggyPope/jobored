import apiInstance from '../apiInstance';

const cataloguesApiService = {
  getAll: async () => {
    try {
      const cataloguesResponse = await apiInstance.get(`catalogues/`);
      return cataloguesResponse.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default cataloguesApiService;
