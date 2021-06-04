import React from 'react';
import styles from './AuthSection.module.css';
import cx from 'classnames';

export const AuthSection = ({ children, className }) => {
  return (
    <section className={cx(styles.authSection, className)}>{children}</section>
  );
};

export default AuthSection;
