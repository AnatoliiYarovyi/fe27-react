import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '', email: '', token: null };

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    register(state, action) {
      return { ...action.payload };
    },
    login(state, action) {},
  },
});

export const { register, login } = usersSlice.actions;
export default usersSlice.reducer;
