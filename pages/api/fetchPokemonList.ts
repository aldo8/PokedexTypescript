import baseApi from "@utils/api";
import { IpokemonDetail } from "@datastore/server/interface/PokemonInterface";
import { fetchPokemon } from "@pages/api/fetchPokemon";

export const fetchPokemonList = async (page:number) => {

  const offset = 9 * (page - 1);
  const api = await baseApi('https://pokeapi.co/api/v2');
  const endPoint = `/pokemon?offset=${offset}&limit=9`;

  const response = await api.get(endPoint);
  const data = await response.data;
  const promises = data.results.map(
    async (pokemon: { name: string }) => await (fetchPokemon(pokemon.name))
  );

  const pokemonList = await Promise.all(promises);
  return pokemonList;
};