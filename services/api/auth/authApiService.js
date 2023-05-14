import axios from 'axios';
import authStorageService from '@/services/localStorage/authStorageService';

const BASE_URL = process.env.NEXT_PUBLIC_INTERNAL_API_BASE_URL;

const authApiService = {
  authByPassword: async () => {
    try {
      const authResponse = await axios.get(`${BASE_URL}auth/password`);
      authStorageService.setAuthObject(authResponse.data);

      return authResponse.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  refreshAccessToken: async () => {
    console.log('Entered refreshAccessToken');
    try {
      let refreshToken = authStorageService.getRefreshToken();

      if (!refreshToken) {
        const authObject = await authByPassword();
        return authObject;
      } else {
        const authResponse = await axios.get(`${BASE_URL}auth/refresh`, {
          params: {
            refresh_token: refreshToken,
          },
        });
        authStorageService.setAuthObject(authResponse.data);
        return authResponse.data;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default authApiService;
