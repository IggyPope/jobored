import axios from 'axios';
import authStorageService from '@/services/localStorage/authStorageService';

// const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const BASE_URL = 'https://startup-summer-proxy-production.up.railway.app/2.0/';
const API_LOGIN = process.env.NEXT_PUBLIC_API_LOGIN;
const API_PASSWORD = process.env.NEXT_PUBLIC_API_PASSWORD;
const API_CLIENT_ID = process.env.NEXT_PUBLIC_API_CLIENT_ID;
const API_CLIENT_SECRET = process.env.NEXT_PUBLIC_API_CLIENT_SECRET;
const API_X_SECRET_KEY = process.env.NEXT_PUBLIC_API_X_SECRET_KEY;

const authApiService = {
  authByPassword: async () => {
    try {
      const authResponse = await axios.get(`${BASE_URL}oauth2/password/`, {
        params: {
          login: API_LOGIN,
          password: API_PASSWORD,
          client_id: API_CLIENT_ID,
          client_secret: API_CLIENT_SECRET,
          hr: 0,
        },
        headers: {
          'x-secret-key': API_X_SECRET_KEY,
          'X-Api-App-Id': API_CLIENT_SECRET,
        },
      });
      const authObject = authResponse.data;

      authStorageService.setAuthObject(authObject);
      return authObject;
    } catch (error) {
      console.log(error);
    }
  },

  refreshAccessToken: async (token) => {
    try {
      const authResponse = await axios.get(`${BASE_URL}oauth2/refresh_token/`, {
        params: {
          refresh_token: token,
          client_id: API_CLIENT_ID,
          client_secret: API_CLIENT_SECRET,
        },
        headers: {
          'x-secret-key': API_X_SECRET_KEY,
          'X-Api-App-Id': API_CLIENT_SECRET,
        },
      });
      const authObject = authResponse.data;

      authStorageService.setAuthObject(authObject);
      return authObject;
    } catch (error) {
      console.log(error);
    }
  },
};

export default authApiService;
