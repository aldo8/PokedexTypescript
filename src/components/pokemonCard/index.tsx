import { FC } from "react";
import { IpokemonDetail } from "@datastore/server/interface/PokemonInterface";
import { cardContent, cardFooter } from "@components/pokemonCard/styles";
import { colorType } from "@helpers/pokeType";

interface PokemonProps {
  dataPokemon:IpokemonDetail[];
  setModal: (value: boolean) => void;
  setPokemonData:(data:IpokemonDetail) => void;
}
const PokemonCard:FC <PokemonProps> = ({dataPokemon,setModal,setPokemonData}) => {
  const {name,types,id} = dataPokemon;
  
  const handleClick = () => {
    setModal(true)
    setPokemonData(dataPokemon)
  }
  
  return (
    <div className={cardContent} onClick={handleClick}>
      <img  className="cardImage" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={name}/>
        <div >
          <div className="cardId">{`#00${id}`}</div>
          <p >
            {name}
          </p>
        </div>
        <div className={cardFooter}>
          {
            types.map((data) => (
              <div className="type" style={{background:colorType[data.type.name] || 'white'}}>{data.type.name}</div>
            ))
          }
        </div>
    </div>
  )
}
export default PokemonCard;