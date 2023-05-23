import {  Typography, Avatar } from "@material-ui/core"
import { useRouter } from "next/router";
import { FC } from "react";

interface IPokemonEvolutionProps {
    dataEvolution:any;
}

const PokemonEvolution:FC<IPokemonEvolutionProps> = ({dataEvolution}) => {
    const router = useRouter();
    const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
    const species = dataEvolution.url;
    const id = species.split("/").slice(-2, -1)[0];
    return (
        <div>
      <Avatar
        alt="Remy Sharp"
        src={imgURL+id+'.png'}
        style={{ width: 250, height: 250 , background:'#B3B6B8'}}
        onClick={() => router.push(`/pokemon/detail/${id}`)}
      />
      <Typography variant="h6" style={{textAlign:'center'}}>
          {dataEvolution.name}
        </Typography>
        </div>
    )
}
export default PokemonEvolution;