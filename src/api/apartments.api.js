import axios from 'axios';

const APARTMENTS_URL = 'https://apt-booking-api.herokuapp.com';

const apartmentsApi = {
  fetchApartments() {
    return axios.get(`${APARTMENTS_URL}/apartments`);
  },

  login(payload) {
    return axios.post(`${APARTMENTS_URL}/users/login`, payload);
  },

  registration(payload) {
    return axios.post(`${APARTMENTS_URL}/users/register`, payload);
  },
};

export default apartmentsApi;
