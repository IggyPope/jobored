const authStorageService = {
  setAuthObject: authObject => {
    localStorage.setItem('authObject', JSON.stringify(authObject));
  },

  getAuthObject: () => {
    return JSON.parse(localStorage.getItem('authObject'));
  },

  deleteAuthObject: () => {
    localStorage.removeItem('authObject');
  },
};

export default authStorageService;
