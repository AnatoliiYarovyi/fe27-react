import { createSlice } from '@reduxjs/toolkit';
import dotaApi from '../../api/dota.api';

// const initialState = [];

// const favoriteHeroesSlice = createSlice({
//   name: 'heroes',
//   initialState,
//   reducers: {},
// });

const fetchStart = () => ({
  type: 'heroes/FETCH_START',
});

const fetchSuccess = data => ({
  type: 'heroes/FETCH_SUCCESS',
  payload: data,
});

const fetchFailure = error => ({
  type: 'heroes/FETCH_FAILURE',
  payload: error,
});

const initialState = {
  heroes: [],
  error: null,
  loading: false,
};

export const asyncActionCreator = args => async dispatch => {
  dispatch(fetchStart());

  try {
    const { data } = await dotaApi.fetchHeroes();
    this.setState(() => ({ heroes: data }));
  } catch (error) {
    console.replace(error);
  } finally {
    this.setState(() => ({ isDataLoaded: true }));
  }

  // fetch('some url')
  //   .then(r => r.json())
  //   .then(data => dispatch(fetchSuccess(data)))
  //   .catch(err => dispatch(fetchFailure(err)));
};

const reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'heroes/FETCH_START':
      return { ...state, loading: true };
    case 'heroes/FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'heroes/FETCH_SUCCESS':
      return { ...state, loading: false, heroes: action.payload };
    default:
      return state;
  }
};

export default reducer;
