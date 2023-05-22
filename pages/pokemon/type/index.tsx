import { FC, useEffect, useState } from "react";
import { IPokemonType } from "@datastore/server/interface/PokemonInterface";
import { fetchListPokemonType } from "@pages/api/fetchListPokemonType";
import { fetchPokemonByType } from "@pages/api/fetchPokemonByType";
import { Typography } from "@material-ui/core/";
import PokemonCard from "@components/pokemonCard";
import { Grid } from "@material-ui/core";



const PokemonType: FC = () => {
    const [loading, setLoading] = useState(false);
    const [loadingContent, setLoadingContent] = useState(false);
    const [pokemonType, setPokemonType] = useState<IPokemonType>([]);
    const [pokemonListType, setListPokemonType] = useState<any>([]);
    const [pokemon, setPokemon] = useState<string>('');
    const { results } = pokemonType;
    useEffect(() => {
        (async () => {
            setLoading(true);
            setPokemonType(await fetchListPokemonType());
            setLoading(false);

        })();
    }, [])



    if (loading) {
        return <p>Loading...</p>
    }
    
    const handleChangeType = async (event: React.ChangeEvent<unknown>, data: { name: string, url: string }) => {
        setListPokemonType(await fetchPokemonByType(data.url));
        setPokemon(data.name)
    }
    return (
        <div style= {{ display: 'flex', flexDirection: 'row' }
}>
    <div style={ { display: 'flex', flexDirection: 'column', width: '10%', paddingLeft: '5em' } }>
        <Typography>Pokemon Type < /Typography> 
{

    results?.map((data, index) => {
        return (
            <span style= {{ padding: '10px', width: 'fit-content' }
    } onClick = {(e) => handleChangeType(e, data)}> { data.name } < /span>
                        )
                    })
                }

</div>
    < div style = {{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div>
        <h1>{ loadingContent? 'Loading': `Pokemon with Type ${pokemon}` } < /h1>
{
    pokemonListType?.pokemonList?.slice(100)?.map((data) => {
        return (
            <Grid container spacing = { 2} justify="center" >
                <Grid item xs = { 3} >
                <img style={{width:"50%"}} className="cardImage" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} alt={data.name}/>
                    < /Grid>
                    < Grid item xs = { 3} >
                        { data.id }
                        < /Grid>
                        < Grid item xs = { 3} >
                        { data.name }
                            < /Grid>
                            < Grid item xs = { 3} >
                                { data?.types?.map((t) => (
                                    <p>{ t.type.name } < /p>
                                ))
}
</Grid>
    < /Grid>
                            
                        )
                    })
                    }
</div>
    < /div>
    < /div>
    )
}
export default PokemonType