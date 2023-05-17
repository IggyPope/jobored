import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_INTERNAL_API_BASE_URL;

const cataloguesApiService = {
  getCatalogues: async () => {
    try {
      const cataloguesResponse = await axios.get(
        `${BASE_URL}catalogues/getAll`
      );

      return cataloguesResponse.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default cataloguesApiService;
