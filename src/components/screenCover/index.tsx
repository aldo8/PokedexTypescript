import React from 'react';
import { Typography } from '@material-ui/core';
import * as styles from './styles';



const ScreenCover: React.FC = () => {


  return (
    <section className={styles.containerSection}>
      <div className={styles.content} style={{display:'flex',flexDirection:'column'}}>
            <h2>
              All the Pokémon data you'll ever need in one place!
              Thousands of data compiled into one place
            </h2>
            <h4>Thousands of data compiled into one place</h4>
            <button><a href="#browse-pokemon">
              Check PokèDex
            </a></button>
      </div>
      <div className={styles.content}>
        <img  src="/assets/PokemonCover.png" alt="Image" />
      </div>
    </section>
  );
};

export default ScreenCover;
