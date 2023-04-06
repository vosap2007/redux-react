import { configureStore } from '@reduxjs/toolkit';
import { clicksSlice, counterReducer, itemsReducer } from './valueSlice';

// export const store = configureStore({ reducer: { clicks: clicksSlice.reducer } });

export const store = configureStore({
  reducer: { value: counterReducer, items: itemsReducer },
});
