import React from 'react';
import PropTypes from 'prop-types';
import AirQualityCard from './AirQualityCard';
import { measurementProps } from './MeasurementItem';
import styles from './AirQuality.module.css';

const AirQualityPage = ({ cities }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.list}>
          {cities.map(item => (
            <AirQualityCard
              key={`${item.city}${item.location}`}
              city={item.city}
              country={item.country}
              measurements={item.measurements}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

AirQualityPage.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string,
      coordinates: PropTypes.object,
      country: PropTypes.string,
      location: PropTypes.string,
      measurements: PropTypes.arrayOf(PropTypes.shape(measurementProps())),
    }),
  ),
};

export default AirQualityPage;
