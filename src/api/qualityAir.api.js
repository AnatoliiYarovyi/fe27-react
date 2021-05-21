import axios from 'axios';

const BASE_URL = 'https://api.openaq.org/v1';

const qualityAirApi = {
  fetchLatest() {
    return axios(`${BASE_URL}/latest`);
  },
};

export default qualityAirApi;
