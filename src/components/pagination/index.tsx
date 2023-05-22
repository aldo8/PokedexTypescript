import { FC } from "react";
import {Pagination} from "@material-ui/lab"
import { IpokemonDetail } from "@datastore/server/interface/PokemonInterface";
import { fetchPokemonList } from "@pages/api/fetchPokemonList";
type PaginationPageProps = {
  totalPage: number;
  totalItem: number;
  setPokemonList: (data: IpokemonDetail[]) => void;
  setPage: (value: number) => void;
}
const PaginationPage:FC = (props:PaginationPageProps) => {
  
  const handlePageChange = async (event:React.ChangeEvent<unknown>,page:number) => {
    props.setPokemonList(await fetchPokemonList(page));
    props.setPage(page);
  }
  return (
      <Pagination count={10} variant="outlined" shape="rounded" onChange={handlePageChange}/>
  )
}
export default PaginationPage;