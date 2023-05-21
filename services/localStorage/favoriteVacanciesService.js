const favoriteVacanciesService = {
  addFavorite: (vacancy) => {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (!favorites) {
      favorites = {};
    }
    if (!favorites.hasOwnProperty(vacancy.id)) {
      favorites[vacancy.id] = vacancy;
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  },

  removeFavorite: (id) => {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (!favorites) {
      return;
    }
    if (favorites.hasOwnProperty(id)) {
      delete favorites[id];
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  },

  checkFavorite: (id) => {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (!favorites) {
      return false;
    }
    return favorites.hasOwnProperty(id);
  },
};

export default favoriteVacanciesService;
