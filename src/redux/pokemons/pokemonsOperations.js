// import * as pokemonsActions from './pokemonsActions';
import * as pokemonsApi from 'api/pokemonsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchPokemons = () => async (dispath) => {
//   dispath(pokemonsActions.fetchPokemonsRequest());

//   try {
//     const pokemons = await pokemonsApi.fetchPokemons();
//     dispath(pokemonsActions.fetchPokemonsSuccess(pokemons));
//   } catch (error) {
//     dispath(pokemonsActions.fetchPokemonsError(error.message));
//   }
// };

export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons',
  async (_, { rejectWithValue }) => {
    try {
      const pokemons = await pokemonsApi.fetchPokemons();
      return pokemons;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
