import baseApi from "@utils/api";
import { IpokemonDetail } from "@datastore/server/interface/PokemonInterface";

export const fetchPokemon = async (pokemon:string) => {
  const api = await baseApi('https://pokeapi.co/api/v2');
  const endPoint = `pokemon/${pokemon}`;
  let response;
  let data:IpokemonDetail;
  let error
  try{
    response = await api.get(endPoint);
    data = await response.data;
    error = false
  }catch (e) {
   data = null;
   error = true;
  }
  return {data,error}
}

