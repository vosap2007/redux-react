import { combineReducers, createReducer, createSlice } from '@reduxjs/toolkit';
import { fetchPokemons } from './pokemonsOperations';
// import * as pokemonsActions from './pokemonsActions';

const entities = createReducer([], {
  [fetchPokemons.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchPokemons.pending]: () => true,
  [fetchPokemons.fulfilled]: () => false,
  [fetchPokemons.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchPokemons.rejected]: (_, action) => action.payload,
  [fetchPokemons.pending]: () => null,
});
export default combineReducers({ entities, isLoading, error });

// const pokemonsSlice = createSlice({
//   name: 'pokemons',
//   initialState: { entities: [], isLoading: false, error: null },
//   extraReducers: {
//     [fetchPokemons.fulfilled]: (state, action) => {
//       // return { ...state, entities: action.payload };
//       state.entities = action.payload;
//     },
//     [fetchPokemons.pending]: (state) => {
//       // return { ...state, isLoading: true };
//       state.isLoading = true;
//     },
//   },
// });

// export default pokemonsSlice.reducer;
