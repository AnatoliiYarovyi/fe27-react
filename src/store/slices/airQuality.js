import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import qualityAirApi from '../../api/qualityAir.api';

const initialState = { items: [], loading: false, error: null };

export const fetchCities = createAsyncThunk(
  'airQuality/fetchCities',
  async () => {
    const { data } = await qualityAirApi.fetchLatest();
    return data.results;
  },
);

const airQualitySlice = createSlice({
  name: 'airQuality',
  initialState,
  reducers: {
    addItems(state, action) {
      state.items = [...action.payload];
      state.error = null;
    },

    enableLoading(state) {
      state.loading = true;
    },

    disableLoading(state) {
      state.loading = false;
    },

    addError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchCities.fulfilled]: (state, action) => {
      state.items = [...action.payload];
      state.loading = false;
    },

    [fetchCities.pending]: state => {
      state.loading = true;
    },

    [fetchCities.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  addItems,
  enableLoading,
  disableLoading,
  addError,
} = airQualitySlice.actions;
export default airQualitySlice.reducer;
