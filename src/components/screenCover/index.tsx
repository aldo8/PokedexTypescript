import React from 'react';
import * as styles from './styles';
import useTranslation from 'next-translate/useTranslation';



const ScreenCover: React.FC = () => {
  const { t } = useTranslation("pokemon");

  return (
    <section className={styles.containerSection}>
      <div className={styles.content} style={{display:'flex',flexDirection:'column'}}>
            <h2>
              {t("cover-title")}
            </h2>
            <h4>{t("cover-subtitle")}</h4>
            <button><a href="#browse-pokemon">
              {t("cover-btn")}
            </a></button>
      </div>
      <div className={styles.content}>
        <img  src="/assets/PokemonCover.png" alt="Image" />
      </div>
    </section>
  );
};

export default ScreenCover;
