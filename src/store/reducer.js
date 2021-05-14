import { types } from './actions';

const reducer = (state = { theme: 'dark' }, action) => {
  switch (action.type) {
    case types.CHANGE_THEME:
      return {
        theme: state.theme === 'dark' ? 'light' : 'dark',
      };

    case types.LIGHT_THEME:
      return {
        theme: 'light',
      };

    default:
      return state;
  }
};

export default reducer;
