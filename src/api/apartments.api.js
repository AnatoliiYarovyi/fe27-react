import axios from 'axios';

const APARTMENTS_URL = 'https://apt-booking-api.herokuapp.com';

const apartmentsApi = {
  fetchApartments() {
    return axios.get(`${APARTMENTS_URL}/apartments`);
  },

  login(payload) {
    return axios.post(`${APARTMENTS_URL}/users/login`, payload);
  },

  register(payload) {
    return axios.post(`${APARTMENTS_URL}/users/register`, payload);
  },

  fetchBookedApartments(token) {
    return axios.get(`${APARTMENTS_URL}/orders`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  toggleApartmentsBooking(payload, token) {
    return axios.post(`${APARTMENTS_URL}/orders`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

export default apartmentsApi;
