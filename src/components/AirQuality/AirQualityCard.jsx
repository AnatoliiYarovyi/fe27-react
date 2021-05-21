import React from 'react';
import { measurementProps } from './MeasurementItem';
import PropTypes from 'prop-types';
import MeasurementItem from './MeasurementItem';
import styles from './AirQuality.module.css';

const AirQualityCard = ({ city, country, measurements }) => {
  return (
    <section className={styles.airQualityCard}>
      <h2>
        Country: {country}. City: {city}
      </h2>
      <ul className={styles.measurementsList}>
        {measurements.map(({ sourceName, unit, value, parameter }) => (
          <MeasurementItem
            key={`${unit}${parameter}${value}`}
            sourceName={sourceName}
            unit={unit}
            value={value}
            parameter={parameter}
          />
        ))}
      </ul>
    </section>
  );
};

AirQualityCard.propTypes = {
  city: PropTypes.string,
  coordinates: PropTypes.object,
  country: PropTypes.string,
  location: PropTypes.string,
  measurements: PropTypes.arrayOf(PropTypes.shape(measurementProps())),
};

export default AirQualityCard;
