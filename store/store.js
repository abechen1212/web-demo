import { configureStore } from '@reduxjs/toolkit';
import featuresReducer from './slices/featuresSlice';
import userReducer from './slices/userSlice';
import buildReducer from './slices/buildSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    features: featuresReducer,
    build: buildReducer,
  },
});

export default store;
