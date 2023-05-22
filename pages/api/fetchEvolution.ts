import baseApi from "@utils/api";
import { IpokemonDetail } from "@datastore/server/interface/PokemonInterface";

export const fetchEvolution = async (url:string) => {
  const api = await baseApi('https://pokeapi.co/api/v2');
  const regex = /\/([^/]+\/[^/]+\/)$/;
  const result = url.match(regex)[1];
  let response;
  let data:IpokemonDetail;

  try{
    response = await api.get(result);
    data = await response.data;
  }catch (e) {
   data = null;
  }
  return data;
}

