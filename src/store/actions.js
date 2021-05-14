export const types = {
  CHANGE_THEME: 'change_theme',
  LIGHT_THEME: 'light_theme',
  ADD_HERO: 'add_hero',
};

export const toggleTheme = () => ({
  type: types.CHANGE_THEME,
});

export const lightThemeAction = () => ({
  type: types.LIGHT_THEME,
});

export const addFavoriteHero = hero => ({
  type: types.ADD_HERO,
  payload: hero,
});
