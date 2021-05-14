import React from 'react';
import PropTypes from 'prop-types';

const FavoriteHeroesCard = ({ title, imgUrl, id }) => {
  return (
    <div>
      <img src={imgUrl} alt="favorite hero" />
      <p>{title}</p>
    </div>
  );
};

FavoriteHeroesCard.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  id: PropTypes.number,
};

export default FavoriteHeroesCard;
