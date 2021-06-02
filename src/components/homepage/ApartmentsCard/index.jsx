import PropTypes from 'prop-types';
import Button from '../../UI/Button';
import style from './ApartmentsCard.module.css';

const Rating = ({ value }) => {
  let stars = [];

  for (let i = 0; i < +value; i++) {
    stars.push(<span key={i}>🎶</span>);
  }

  return <div className={style.rating}>Rating: {stars}</div>;
};

const ApartmentsCard = ({
  id,
  title,
  descr,
  imgUrl,
  rating,
  onBookApartment,
}) => {
  return (
    <div className={style.card}>
      <img className={style.img} src={imgUrl} alt="apartments view" />
      <Rating value={rating} />
      <h2>{title}</h2>
      <p>{descr}</p>
      <Button onClick={() => onBookApartment(id)}>Book apartment</Button>
    </div>
  );
};

ApartmentsCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  descr: PropTypes.string,
  imgUrl: PropTypes.string,
  rating: PropTypes.number,
  onBookApartment: PropTypes.func,
};

export default ApartmentsCard;
