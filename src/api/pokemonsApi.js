import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

export async function fetchPokemons() {
  const { data } = await axios.get();
  return data;
}
