import baseApi from "@utils/api";
import { IpokemonDetail } from "@datastore/server/interface/PokemonInterface";

export const fetchSpecies = async (pokemon:number) => {
  const api = await baseApi('https://pokeapi.co/api/v2');
  const endPoint = `pokemon-species/${pokemon}`;
  let response;
  let data:IpokemonDetail;
  try{
    response = await api.get(endPoint);
    data = await response.data;
  }catch (e) {
   data = null;
   error = true;
  }
  return data;
}

