import { CircularProgress, Typography, makeStyles } from "@material-ui/core"

interface IPokemonStatusProps {
    dataStatus:any;
}
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    progressContainer: {
      position: 'relative',
      width: 100,
      height: 100,
    },
    progressLabel: {
      position: 'absolute',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    
    nameLabel: {
        position: 'absolute',
        top: '70%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
  }));
const PokemonStatus:FC<IPokemonStatusProps> = ({dataStatus}) => {
    const classes = useStyles();
    
    

    return (
      <div className={classes.root}>
      <div className={classes.progressContainer}>
        <CircularProgress
          variant="determinate"
          value={dataStatus?.base_stat}
          
          size={100}
          thickness={2}
        />
        <Typography variant="h6" className={classes.progressLabel}>
          {`${dataStatus?.base_stat}`}
        </Typography>
        <Typography variant="h8" className={classes.nameLabel}>
        {dataStatus?.stat?.name}
        </Typography>
      </div>
    </div>
    )
}
export default PokemonStatus;