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
            const heroName = hero.name
              .toLowerCase()
              .replace('npc_dota_hero_', '');
            const imgUrl = `http://cdn.dota2.com/apps/dota2/images/heroes/${heroName}_full.png`;

            return (
              <FavoriteHeroesCard
                key={hero.id}
                title={hero.localized_name}
                imgUrl={imgUrl}
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
