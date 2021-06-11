import { useState } from 'react';
import PropTypes from 'prop-types';
import FavoriteHeroesCard from '../FavoriteHeroesCard';
import styles from './FavoriteHeroes.module.css';

const FavoriteHeroes = ({ heroesList = [] }) => {
  const [showHeroes, setShowHeroes] = useState(false);

  return (
    <section className={styles.wrapper}>
      <button onClick={() => setShowHeroes(!showHeroes)} className={styles.btn}>
        <span>💖</span>
        <span className={styles.heroesAmount}>{heroesList.length}</span>
      </button>
      {showHeroes && (
        <div className={styles.heroesList}>
          {heroesList.map(hero => {
            return (
              <FavoriteHeroesCard
                key={hero.apartment.id}
                title={hero.apartment.title}
                imgUrl={hero.apartment.imgUrl}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

FavoriteHeroes.propTypes = {
  heroesList: PropTypes.array,
};

export default FavoriteHeroes;
