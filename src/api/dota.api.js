import axios from 'axios';

const BASE_URL = 'https://api.opendota.com/api';

const dotaApi = {
  fetchHeroes() {
    return axios.get(`${BASE_URL}/heroes`);
  },

  fetchHeroById(id) {
    return axios
      .get(`${BASE_URL}/heroes`)
      .then(({ data: heroes }) => heroes.find(hero => +hero.id === +id));
  },

  fetchPopularItemsByHeroId(heroId) {
    return axios.get(`${BASE_URL}/heroes/${heroId}/itemPopularity`);
  },
};

export default dotaApi;
