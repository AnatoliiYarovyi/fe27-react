import ApartmentsCard from '../ApartmentsCard/';
import styles from './ApartmentsList.module.scss';
import PropTypes from 'prop-types';

const ApartmentsList = ({ items, onBookApartment }) => {
  return (
    <div className={styles.list}>
      {items.map(({ id, title, descr, imgUrl, rating }) => (
        <ApartmentsCard
          key={id}
          id={id}
          rating={rating}
          title={title}
          descr={descr}
          imgUrl={imgUrl}
          onBookApartment={onBookApartment}
        />
      ))}
    </div>
  );
};

ApartmentsList.propTypes = {
  items: PropTypes.array.isRequired,
  onBookApartment: PropTypes.func,
};

export default ApartmentsList;
