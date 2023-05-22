import { FC } from "react";
import { Button,Box, Modal, Typography, makeStyles,Grid } from '@material-ui/core';
import { IpokemonDetail } from "@datastore/server/interface/PokemonInterface";
import { useRouter } from 'next/router';

interface PokemonModalProps {
    open: boolean;
    setModal: () => void;
    pokemonData: IpokemonDetail;

}

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
const PokemonModal: FC<ModalProps> = ({ open, setModal, pokemonData }) => {
    const router = useRouter();
    
    const classes = useStyles();

    const handleClose = () => {
        setModal(false)
    }
    return (
        <Modal open= { open } onClose = { handleClose } >
        <Box sx={style}>
        <Grid container spacing={2}>
          <Grid item xs={6} className={classes.column}>
            {/* Content for the left column */}
            <img  className="cardImage" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`} alt={name}/>
            {/* Add your content here */}
          </Grid>
          <Grid item xs={6} className={classes.column}>
            {/* Content for the right column */}
            <Typography variant="h6">{pokemonData.name}</Typography>
            <Typography variant="h6">Weight : {pokemonData.weight}</Typography>
            <Typography variant="h6">Weight : {pokemonData.height}</Typography>
            <Typography variant="h6">Abilities : </Typography>
            {pokemonData.abilities.map((data) => (
                <li variant="h6">{data.ability.name}</li>
            ))}
            <Typography variant="h6">Type : </Typography>
            {pokemonData.types.map((data) => (
                <li variant="h6">{data.type.name}</li>
            ))}
            <Button onClick={() => router.push(`/pokemon/detail/${pokemonData.id}`)}>More Details</Button>
          </Grid>
        </Grid>
      </Box>
        < /Modal>
    )
}
export default PokemonModal;