'use server';

import axios from 'axios';

const BASE_URL = process.env.API_BASE_URL;
const X_SECRET_KEY = process.env.API_X_SECRET_KEY;

const serverInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-secret-key': X_SECRET_KEY,
  },
});

export default serverInstance;
