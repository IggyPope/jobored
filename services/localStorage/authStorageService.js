const authStorageService = {
  setAuthObject: authObject => {
    localStorage.setItem('authObject', JSON.stringify(authObject));
  },

  getAuthObject: () => {
    return JSON.parse(localStorage.getItem('authObject'));
  },

  getAccessToken: () => {
    const authObject = JSON.parse(localStorage.getItem('authObject'));
    const accessToken = authObject?.access_token;
    return accessToken;
  },

  getRefreshToken: () => {
    const authObject = JSON.parse(localStorage.getItem('authObject'));
    const refreshToken = authObject?.refresh_token;
    return refreshToken;
  },
};

export default authStorageService;
