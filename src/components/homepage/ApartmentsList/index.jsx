import ApartmentsCard from '../ApartmentsCard/';
import styles from './ApartmentsList.module.css';
import PropTypes from 'prop-types';

const ApartmentsList = ({ items }) => {
  return (
    <div className={styles.list}>
      {items.map(({ id, title, descr, imgUrl, rating }) => (
        <ApartmentsCard
          key={id}
          rating={rating}
          title={title}
          descr={descr}
          imgUrl={imgUrl}
        />
      ))}
    </div>
  );
};

ApartmentsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ApartmentsList;
