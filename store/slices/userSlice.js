import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userID: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserID: (state, action) => {
      state.userID = action.payload;
    },
  },
});

export const { setUserID } = userSlice.actions;

export default userSlice.reducer;
