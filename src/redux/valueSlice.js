import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

// export const clicksSlice = createSlice({
//   name: 'clicks',
//   initialState: { value: 0 },
//   reducers: {
//     increment(state) {
//       state.value += 1;
//     },
//     decrement(state) {
//       state.value -= 1;
//     },
//   },
// });

export const increment = createAction('value/increment');
export const decrement = createAction('value/decrement');

export const counterReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

export const add = createAction('items/add');
export const del = createAction('items/del');

export const itemsReducer = createReducer([], {
  [add]: (state, action) => [...state, action.payload],
  [del]: (state, action) => state.filter((name) => name !== action.payload),
});

// export const { increment, decrement } = counterReducer;
// export const { increment, decrement } = clicksSlice.actions;
