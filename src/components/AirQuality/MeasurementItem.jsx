import React from 'react';
import PropTypes from 'prop-types';
import styles from './AirQuality.module.css';

const MeasurementItem = ({ sourceName, parameter, value, unit }) => {
  return (
    <div>
      <h4 className={styles.measurementTitle}>{sourceName}</h4>
      <div className={styles.measurementsValues}>
        <span>{parameter}</span>
        <span>
          {value} {unit}
        </span>
      </div>
    </div>
  );
};

export const measurementProps = () => ({
  sourceName: PropTypes.string,
  unit: PropTypes.string,
  value: PropTypes.number,
  parameter: PropTypes.string,
});

MeasurementItem.propTypes = measurementProps();

export default MeasurementItem;
