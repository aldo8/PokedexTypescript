import React, { FC, useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { Button, Box, Typography, makeStyles, Grid, Container } from '@material-ui/core';
import { useRouter } from "next/router";
import { IpokemonDetail } from "@datastore/server/interface/PokemonInterface";
import { fetchPokemon } from "@pages/api/fetchPokemon";
import { fetchEvolution } from "@pages/api/fetchEvolution";
import PokemonStatus from "@components/pokemonStatus";
import { fetchPokemonList } from "@pages/api/fetchPokemonList";
import { fetchSpecies } from "@pages/api/fetchSpecies";
import PokemonEvolution from "@components/pokemonEvolution";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        
    },
}));
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const DetailPokemon: FC = () => {
    const [loading, setLoading] = useState(false);
    const [pokemonDetail, setPokemonDetail] = useState<IpokemonDetail>();
    const [evolution, setEvolution] = useState<IpokemonDetail>();
    const [otherPokemon, setOtherPokemon] = useState<IpokemonDetail>();
    const [species, setSpecies] = useState<any>();
    const { t } = useTranslation();
    const router = useRouter();
    const { id } = router.query;
    const classes = useStyles();
    useEffect(() => {
        (async () => {
            setLoading(true);
            setPokemonDetail(await fetchPokemon(id));
            const species = await fetchSpecies(id);
            
            setEvolution(await fetchEvolution(species.evolution_chain.url));
            setOtherPokemon(await fetchPokemonList(id));
            setLoading(false);

        })();
    }, [])
    
    const data = otherPokemon?.filter(data => data.id !== id) 
    
    
    
    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <Container maxWidth= "xl" >
        <div>
        <Grid container spacing = { 2} >
            <Grid item xs = { 6} className = { classes.column } >
                <img  className="cardImage" src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
} alt = { pokemonDetail?.data.name } />

    </Grid>

    < Grid item xs = { 6} className = { classes.column } >
        <Typography variant="h6" > { pokemonDetail?.data.name } < /Typography>
            < Typography variant = "h6" > Weight : { pokemonDetail?.data.weight } </Typography>
                < Typography variant = "h6" > Weight : { pokemonDetail?.data.height } </Typography>
                    < Typography variant = "h6" > Abilities : </Typography>
{
    pokemonDetail?.data.abilities.map((data) => (
        <li>{ data.ability.name } < /li>        
    ))
}
<Typography variant="h6" > Type : </Typography>
{
    pokemonDetail?.data.types.map((data) => (
        <li>{ data.type.name } < /li>        
    ))
}
</Grid>
    < /Grid>
    < /div>
    < div >
    <Grid container spacing = {1} style={{gap:'10px'}}>
            {
                otherPokemon?.map((pokemon) => (
                    <>
                    <img style={{width:'10%', border:'1px solid black'}} className="cardImage" src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.data.id}.png`} alt = { pokemon.data.name } />
                    </>
                ))
                
            }
    </Grid>
    <Grid container spacing = { 1} >
        <Grid item xs = { 12} className = { classes.column } >
        <Typography variant="h5" style={{display:'flex', alignItems:'flex-start'}}>Stat : </Typography>

                < /Grid>
                < Grid item xs = { 12} className = { classes.row } >
                {
                    pokemonDetail?.data.stats.map((data) => (
                        <>
                        <PokemonStatus dataStatus={data}/>
                    
                    < />
                    ))
                }

                    < /Grid>
                    < /Grid>
                    < Grid container spacing = { 1} >
                        <Grid item xs = { 12} className = { classes.column } >
                            <Typography>Evolution : </Typography>

                                < /Grid>
                                
                            < Grid item xs = { 12} className = { classes.row } >
                            {evolution?.chain?.species && <PokemonEvolution dataEvolution={evolution.chain.species}/> }
                            {evolution?.chain.evolves_to.map(
                                (s: any, idx: number) => {
                                  return (
                                    <PokemonEvolution dataEvolution={s.species}/> 
                                  )
                                }
                              )}
                              {evolution?.chain.evolves_to[0].evolves_to.map(
                                (s: any, idx: number) => {
                                    return (
                                        <PokemonEvolution dataEvolution={s.species}/> 
                                      )
                                }
                              )}
                            < /Grid>
    < /Grid>
    < /div>
    < /Container>
    );
};

export default DetailPokemon;
