import axios from 'axios';

const BASE_URL = '/api/';

const clientInstance = axios.create({
  baseURL: BASE_URL,
});

async function refreshAccessToken() {
  const refreshToken = localStorage.getItem('refresh_token');

  if (!refreshToken) {
    return;
  }

  try {
    const response = await axios.get(`${BASE_URL}auth/refresh/`, {
      params: {
        refresh_token: refreshToken,
      },
    });

    const newAccessToken = response.data['access_token'];

    localStorage.setItem('access_token', response.data['access_token']);
    localStorage.setItem('refresh_token', response.data['refresh_token']);

    return newAccessToken;
  } catch (error) {
    return Promise.reject(error);
  }
}

// A request interceptor to handle authorization
clientInstance.interceptors.request.use(
  async config => {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');

    if (accessToken && refreshToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      return config;
    }

    try {
      const authResponse = await axios.get(`${BASE_URL}auth/password`);

      const newAccessToken = authResponse.data['access_token'];
      localStorage.setItem('access_token', newAccessToken);

      const refreshToken = authResponse.data['refresh_token'];
      localStorage.setItem('refresh_token', refreshToken);

      config.headers.Authorization = `Bearer ${newAccessToken}`;
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  error => Promise.reject(error)
);

// A response interceptor to handle access_token expiration
clientInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    // API will respond with a 410 status code if the access_token is expired
    if (error.response.status === 410 && !originalRequest._retry) {
      originalRequest._retry = true;
      const accessToken = await refreshAccessToken();
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      return await axios(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default clientInstance;
