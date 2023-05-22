export interface IPokemon {
  name:string;
  url:string;
}
export interface IPokemonListResponse {
  count:number;
  next:number | null;
  previous:number | null;
  results:Ipokemon[];
}

export interface IpokemonDetail {
  id: number;
  name: string;
  types: [{ type: { name: string } }];
  weight: number;
  height: number;
  stats: [{ base_stat: number; stat: { name: string } }];
}
export interface IPokemonType {
  name:string;
  url:string;
}
