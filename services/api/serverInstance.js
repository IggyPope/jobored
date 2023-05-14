'use server';

import axios from 'axios';

const BASE_URL = process.env.EXTERNAL_API_BASE_URL;
const X_SECRET_KEY = process.env.API_X_SECRET_KEY;

const serverInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    common: {
      'x-secret-key': X_SECRET_KEY,
    },
  },
  validateStatus: function (status) {
    return status >= 200; // default
  },
  maxRedirects: 10,
});

serverInstance.interceptors.request.use(
  config => {
    console.log(
      `Server instance intercepted request config: \n ${JSON.stringify(config)}`
    );
    return config;
  },
  error => Promise.reject(error)
);

serverInstance.interceptors.response.use(
  response => response,
  async error => {
    console.log(`Server instance intercepted response error: \n ${error}`);
  }
);

export default serverInstance;
