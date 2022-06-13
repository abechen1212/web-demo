import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  buildData: {},
  layout: [],
};

const buildSlice = createSlice({
  name: 'build',
  initialState,
  reducers: {
    appendBuildData: (state, action) => {
      state.buildData = action.payload;
    },
    appendLayout: (state, action) => {
      state.layout = action.payload;
    },
  },
});

export const { appendBuildData, appendLayout } = buildSlice.actions;

export default buildSlice.reducer;
