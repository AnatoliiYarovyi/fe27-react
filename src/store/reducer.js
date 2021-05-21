import { createReducer } from '@reduxjs/toolkit';
import {
  toggleTheme,
  lightThemeAction,
  addFavoriteHero,
} from './toolkitActions';

const initialState = { theme: 'dark', favoriteHeroes: [] };

const reducer = createReducer(
  { ...initialState },
  {
    [toggleTheme.type]: state => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },

    [lightThemeAction.type]: state => {
      state.theme = 'light';
    },

    [addFavoriteHero.type]: (state, action) => {
      const heroId = action.payload.id;

      if (state.favoriteHeroes.find(hero => hero.id === heroId)) {
        return state;
      }

      state.favoriteHeroes = [action.payload, ...state.favoriteHeroes];
    },
  },
);

export default reducer;
