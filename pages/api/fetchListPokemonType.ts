import baseApi from "@utils/api";

export const fetchListPokemonType = async () => {
  const api = await baseApi('https://pokeapi.co/api/v2');
  const endPoint = `/type`;

  const response = await api.get(endPoint);
  const data = await response.data;
  
  return data;
};

