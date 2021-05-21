import { createAction } from '@reduxjs/toolkit';

export const toggleTheme = createAction('change_theme');
export const lightThemeAction = createAction('light_theme');
export const addFavoriteHero = createAction('add_hero');
