import { createContext } from 'react';

const defaultValue = {
  theme: 'light',
};

export const { Provider, Consumer } = createContext(defaultValue);
