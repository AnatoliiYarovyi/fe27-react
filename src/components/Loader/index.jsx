import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Loader.module.css';

const Loader = ({ loading = true }) => {
  return (
    <div
      className={classnames(styles.loader, {
        [styles.hide]: !loading,
      })}
    >
      <div className={styles.loaderIcon}></div>
    </div>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool,
};

export default Loader;
