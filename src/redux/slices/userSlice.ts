import { createSlice } from '@reduxjs/toolkit';

const INITIALSTATE = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIALSTATE,
  reducers: {
    user: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    loggedOut: state => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { user, loggedOut } = userSlice.actions;
export default userSlice.reducer;
