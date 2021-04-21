import ApartmentsCard from '../ApartmentsCard/';
import styles from './ApartmentsList.module.css';
import PropTypes from 'prop-types';

const ApartmentsList = ({ items, onDelete }) => {
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
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

ApartmentsList.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func,
};

export default ApartmentsList;
