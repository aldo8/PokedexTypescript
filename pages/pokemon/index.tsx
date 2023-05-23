import React, { FC, useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { Box, Container, Typography } from "@material-ui/core";
import PaginationPage from "@components/pagination";
import PokemonCard from "@components/pokemonCard";
import baseApi from "@utils/api";
import { IpokemonDetail, IPokemonListResponse } from "@datastore/server/interface/PokemonInterface";
import { fetchPokemonList } from "@pages/api/fetchPokemonList";
import { cardContainer } from "@components/pokemonCard/styles";
import PokemonModal from "@components/pokemonModal";
import ScreenCover from "@components/screenCover";

const PokemonList: FC = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState<IpokemonDetail>();
  const [pokemonList, setPokemonList] = useState<IpokemonDetail[]>([]);
  const [listPokemon, setListPokemon] = useState<IPokemonListResponse>([]);
  const [modal, setModal] = useState(false);
  
  useEffect( () => {
    (async () => {
    setLoading(true);
    setPokemonList(await fetchPokemonList(page))
    setLoading(false);
    
  })();
  }, [page])
if(loading == true) {
  return (
    <Container maxWidth="xl">
      <Typography>Loading...</Typography>
    </Container>
  );
}
return (
  <>
  <ScreenCover/>
  <section id="browse-pokemon" style={{background:'#FFCB3B',justifyItems:'center',padding:'2em'}} className={cardContainer}>
      {pokemonList.map((pokemon) => (
        <div>
          <PokemonCard dataPokemon={pokemon.data} setModal={setModal} setPokemonData={setPokemonData}/>
        </div>

      ))}
      {modal && <PokemonModal open={modal} setModal={setModal} pokemonData={pokemonData}/>}
      </section>
      <div style={{background:'#FFCB3B',justifyContent:'center',width:'100%',padding:'2em 0',display:'flex'}}>
      <PaginationPage totalPage={listPokemon.count} totalItem={9} setPokemonList={setPokemonList} setPage={setPage}/>
      </div>
  </>
)

};

export default PokemonList;
