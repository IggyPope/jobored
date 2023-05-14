'use client';

import axios from 'axios';
import authStorageService from '@/services/localStorage/authStorageService';
import authApiService from '@/services/api/auth/authApiService';

const BASE_URL = process.env.NEXT_PUBLIC_INTERNAL_API_BASE_URL;

const clientInstance = axios.create({
  baseURL: BASE_URL,
});

// A request interceptor to handle authorization
clientInstance.interceptors.request.use(
  async config => {
    let authObject = authStorageService.getAuthObject();

    if (authObject) {
      const accessToken = authObject.access_token;
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      return config;
    } else {
      authObject = await authApiService.authByPassword();
      const newAccessToken = authObject.access_token;

      config.headers.Authorization = `Bearer ${newAccessToken}`;

      return config;
    }
  },
  error => Promise.reject(error)
);

// A response interceptor to handle access_token expiration
clientInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 410 && !originalRequest._retry) {
      // API will respond with a 410 status code if the access_token expired

      originalRequest._retry = true;
      const authObject = await authApiService.refreshAccessToken();
      const accessToken = authObject.access_token;
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      return await axios(originalRequest);
    } else if (!originalRequest._retry) {
      // Attempt auth by password and then retry the request with a new token in case of any other error

      originalRequest._retry = true;
      const authObject = await authApiService.authByPassword();
      const accessToken = authObject.access_token;
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      return await axios(originalRequest);
    } else {
      return Promise.reject(error);
    }
  }
);

export default clientInstance;
