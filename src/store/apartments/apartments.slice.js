import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookedApartments: [],
};

const apartmentsSlice = createSlice({
  name: 'apartments',
  initialState,
  reducers: {
    setBookedApartments(state, action) {
      state.bookedApartments = action.payload;
    },
    toggleBookingApartments(state, action) {
      const { id } = action.payload;
      const hasApartment = state.bookedApartments.find(
        apartment => apartment.id === id,
      );

      if (hasApartment) {
        state.bookedApartments = state.bookedApartments.filter(
          apartment => apartment.id !== id,
        );
        return;
      }

      state.bookedApartments = [
        action.payload,
        ...state.bookedApartments.bookedApartments,
      ];
    },
  },
});

export const {
  toggleBookingApartments,
  setBookedApartments,
} = apartmentsSlice.actions;
export default apartmentsSlice.reducer;
