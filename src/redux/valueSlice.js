import { createSlice } from '@reduxjs/toolkit';

export const clicksSlice = createSlice({
  name: 'clicks',
  initialState: { value: 0 },
  reducers: {
    update(state) {
      state.value += 1;
    },
  },
});

export const { update } = clicksSlice.actions;
