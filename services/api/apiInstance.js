'use client';

import axios from 'axios';
import authStorageService from '@/services/localStorage/authStorageService';
import authApiService from '@/services/api/auth/authApiService';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// const BASE_URL = 'https://startup-summer-proxy-production.up.railway.app/2.0/';
const X_SECRET_KEY = process.env.NEXT_PUBLIC_API_X_SECRET_KEY;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_API_CLIENT_SECRET;

const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    common: {
      'x-secret-key': X_SECRET_KEY,
      'X-Api-App-Id': CLIENT_SECRET,
    },
  },
});

// A request interceptor to handle authorization and token refresh
apiInstance.interceptors.request.use(
  async (config) => {
    const authObject = authStorageService.getAuthObject();

    if (authObject) {
      const ttl = Number(authObject.ttl) * 1000;

      if (Date.now() < ttl) {
        config.headers.Authorization = `Bearer ${authObject.access_token}`;
        return config;
      } else {
        const refreshToken = authObject.refresh_token;
        const refreshedObject = await authApiService.refreshAccessToken(
          refreshToken
        );

        config.headers.Authorization = `Bearer ${refreshedObject.access_token}`;
        return config;
      }
    } else {
      const newAuthObject = await authApiService.authByPassword();

      config.headers.Authorization = `Bearer ${newAuthObject.access_token}`;
      return config;
    }
  },
  (error) => Promise.reject(error)
);

// A response interceptor to attempt handling other auth problems
apiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    let originalRequest = error.config;

    if (!originalRequest._retry) {
      // Attempt auth by password and then retry the request with a new token in case of any other error

      originalRequest._retry = true;

      authStorageService.deleteAuthObject();

      const newAuthObject = await authApiService.authByPassword();
      const accessToken = newAuthObject.access_token;
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      return await axios(originalRequest);
    } else {
      return Promise.reject(error);
    }
  }
);

export default apiInstance;
