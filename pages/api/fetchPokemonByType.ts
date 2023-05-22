import baseApi from "@utils/api";

export const fetchPokemonUrl = async (pokemonUrl:string) => {
    const api = await baseApi('https://pokeapi.co/api/v2');
    const regex = /\/([^/]+\/[^/]+\/)$/;
    const result = pokemonUrl.match(regex)[1];
    const response = await api.get(result);
    const pokemonData = await response.data;
    return pokemonData;
}
export const fetchPokemonByType = async (url: string) => {
    const api = await baseApi('https://pokeapi.co/api/v2');
    const regex = /\/([^/]+\/[^/]+\/)$/;
    const result = url.match(regex)[1];
    const response = await api.get(result);
    const typeData = await response.data;
    const pokemonUrls = typeData.pokemon.map((pokemon: Pokemon) => pokemon.pokemon.url);
    const pokemonPromises = pokemonUrls.map((url: string) => fetchPokemonUrl(url));
    const pokemonList = await Promise.all(pokemonPromises);
    const paging = typeData.pokemon.length > 20 ? typeData.pokemon.slice(20).url : null
    return {
        pokemonList,
        nextPage: paging
    };
    
  }
  
  