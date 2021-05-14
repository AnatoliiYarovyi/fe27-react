export const types = {
  CHANGE_THEME: 'change_theme',
  LIGHT_THEME: 'light_theme',
};

export const toggleTheme = () => ({
  type: types.CHANGE_THEME,
});

export const lightThemeAction = () => ({
  type: types.LIGHT_THEME,
});
