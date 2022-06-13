import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userID: '',
  userName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user_id, username } = action.payload;
      state.userID = user_id;
      state.userName = username;
    },
    resetUser: (state) => {
      state.userID = '';
      state.userName = '';
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
