import { createAction } from '@reduxjs/toolkit';

export const toggleTheme = createAction('change_theme');
// toggleTheme.type = 'change_theme' - под капотом записывает тип

export const lightThemeAction = createAction('light_theme');

export const addFavoriteHero = createAction('add_hero');
