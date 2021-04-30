import axios from 'axios';

const BASE_URL = 'https://api.opendota.com/api';

const dotaApi = {
  fetchHeroes() {
    return axios.get(`${BASE_URL}/heroes`);
  },
};

export default dotaApi;
