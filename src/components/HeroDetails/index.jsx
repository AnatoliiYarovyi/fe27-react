import PropTypes from 'prop-types';

const HeroDetails = ({ name, imgUrl, details }) => {
  return (
    <div>
      <img src={imgUrl} alt="" />
      <h1>{name}</h1>
      <p>{details}</p>
    </div>
  );
};

HeroDetails.propTypes = {
  details: PropTypes.string,
  name: PropTypes.string,
  imgUrl: PropTypes.string,
};

export default HeroDetails;
