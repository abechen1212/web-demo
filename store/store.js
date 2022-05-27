import { configureStore } from '@reduxjs/toolkit';
import featuresReducer from './slices/featuresSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    features: featuresReducer,
  },
});

export default store;
