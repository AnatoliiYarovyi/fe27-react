import { createSlice } from '@reduxjs/toolkit';

const initialState = { theme: 'dark' };

const themeSlice = createSlice({
  name: 'favoriteHeroes',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },

    enableLightTheme(state) {
      state.theme = 'light';
    },
  },
});

export const { toggleTheme, enableLightTheme } = themeSlice.actions;
export default themeSlice.reducer;
