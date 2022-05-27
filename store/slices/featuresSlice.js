import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  features: [],
  userPreferences: [],
  selectPlatform: '',
};

const featuresSlice = createSlice({
  name: 'features',
  initialState,
  reducers: {
    appendFeatures: (state, action) => {
      state.features = action.payload;
    },
    appendUserPreferences: (state, action) => {
      state.userPreferences = action.payload;
    },
    setSelectPlatform: (state, action) => {
      state.selectPlatform = action.payload;
    },
  },
});

export const { appendFeatures, appendUserPreferences, setSelectPlatform } =
  featuresSlice.actions;

export default featuresSlice.reducer;
