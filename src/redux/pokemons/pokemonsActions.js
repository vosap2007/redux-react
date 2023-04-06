import { createAction } from '@reduxjs/toolkit';

//pending
export const fetchPokemonsRequest = createAction(
  'pokemons/fetchPokemonsRequest'
);
//fulfilld
export const fetchPokemonsSuccess = createAction(
  'pokemons/fetchPokemonsSuccess'
);
//rejected
export const fetchPokemonsError = createAction('pokemons/fetchPokemonsError');
