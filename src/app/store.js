import { configureStore } from '@reduxjs/toolkit';
import cmsReducer from '../features/cmsSlice';
import authReducer from '../features/authSlice';

export const store = configureStore({
  reducer: {
    cms: cmsReducer,
    auth: authReducer,
  },
});