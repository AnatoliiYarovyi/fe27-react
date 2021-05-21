import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const favoriteHeroesSlice = createSlice({
  name: 'favoriteHeroes',
  initialState,
  reducers: {
    addFavoriteHero(state, action) {
      const heroId = action.payload.id;

      if (state.items.find(hero => hero.id === heroId)) {
        return state;
      }

      state.items = [action.payload, ...state.items];
    },
  },
});

export const { addFavoriteHero } = favoriteHeroesSlice.actions;
export default favoriteHeroesSlice.reducer;
