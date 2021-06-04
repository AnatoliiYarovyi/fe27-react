import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import favoriteHeroesReducer from './slices/favoriteHeroes';
import heroesReducer from './slices/heroes';
import themeReducer from './slices/theme';
import airQualityReducer from './slices/airQuality';
import usersReducer from './users/users.slice';

const loggerMiddleware = store => next => action => {
  console.log(`Action type: ${action.type}; payload: ${action.payload}`);
  next(action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  loggerMiddleware,
];

const persistConfig = {
  key: 'users',
  storage,
};

const rootReducer = combineReducers({
  favoriteHeroes: favoriteHeroesReducer,
  heroes: heroesReducer,
  theme: themeReducer,
  airQuality: airQualityReducer,
  users: usersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);

export default store;
