import { configureStore } from '@reduxjs/toolkit';
import { clicksSlice } from './valueSlice';

export const store = configureStore({
  reducer: { clicks: clicksSlice.reducer },
});
