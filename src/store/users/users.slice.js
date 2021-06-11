import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '', email: '', token: null };

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    register(state, action) {
      const { name, email, token } = action.payload;
      return { name, email, token };
    },
    login(state, action) {
      const { name, email, token } = action.payload;
      return { name, email, token };
    },
    logout(state) {
      state.token = '';
    },
  },
});

export const { register, login, logout } = usersSlice.actions;
export default usersSlice.reducer;
