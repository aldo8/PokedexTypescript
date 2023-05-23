import { FC } from "react";
import { Button,Box, Modal, Typography, makeStyles,Grid } from '@material-ui/core';
import { IpokemonDetail } from "@datastore/server/interface/PokemonInterface";
import { useRouter } from 'next/router';
import { colorType } from "@helpers/pokeType";
import useTranslation from "next-translate/useTranslation";

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
    columnRight: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    labelContainer:{
      display:'flex',
      flexDirection:'row',
      width:'100%'
    },
    labelPokemon:{
      width:'100%',
      fontSize:'1.2em',
      fontWeight:400
    },
    btnModal:{
      margin:'0 10px',
      background:'#E6AB09',
      fontWeight:400,
    },
    type:{
      width:'20%',
      fontSize:'1.2em',
      fontWeight:400,
      border:'1px solid black',
      borderRadius:'8px',
      textAlign:'center',
      margin:'10px',
      padding:'10px',
      color:'#F5F5F5',
      cursor:'pointer'
    }

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
  const { t } = useTranslation("pokemon");
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
          <Grid item xs={6} className={classes.columnRight}>
            {/* Content for the right column */}
            <Typography variant="h2" style={{textTransform:'uppercase',fontWeight:'400'}}>{pokemonData.name}</Typography>
            <div className={classes.labelContainer}>
            <div className={classes.labelPokemon}>{t("card-label-weight")} : {pokemonData.weight}</div>
            <div className={classes.labelPokemon}>{t("card-label-height")} : {pokemonData.height}</div>
            </div>
            <Typography variant="h6">{t("card-label-ability")} : </Typography>
            {pokemonData.abilities.map((data) => (
              <div className={classes.labelContainer}>
                <li variant="h6">{data.ability.name}</li>
                </div>
            ))}
            <Typography variant="h6">{t("card-label-type")} : </Typography>
            <div className={classes.labelContainer}>
            {pokemonData.types.map((data) => (
                <div className={classes.type} style={{background:colorType[data.type.name] || 'white'}}>{t(`${data.type.name}`)}</div>
            ))}
            </div>
            <Button className={classes.btnModal} onClick={() => router.push(`/pokemon/detail/${pokemonData.id}`)}>{t("card-modal-btn")}</Button>
          </Grid>
        </Grid>
      </Box>
        < /Modal>
    )
}
export default PokemonModal;