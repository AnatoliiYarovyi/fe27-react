import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
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
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
  key: 'root',
  storage,
};

// const rootReducer = combineReducers({
//   reducer,
// });

const persistedReducer = persistReducer(persistConfig, reducer);

// const store = createStore(
//   persistedReducer,
//   composeEnhancers(applyMiddleware()),
// );

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);

// способ добавления в локасторадж элементов
store.subscribe(() => {
  localStorage.setItem(
    'testStore',
    JSON.stringify(store.getState().favoriteHeroes),
  );
});

export default store;
