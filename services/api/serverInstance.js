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

export default serverInstance;
