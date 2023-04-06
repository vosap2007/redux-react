import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './pokemons/pokemonsReducer';
// import { clicksSlice, counterReducer, itemsReducer } from './valueSlice';

// export const store = configureStore({ reducer: { clicks: clicksSlice.reducer } });

// export const store = configureStore({
//   reducer: { value: counterReducer, items: itemsReducer },
// });

export const store = configureStore({
  reducer: { pokemons: pokemonsReducer },
});
