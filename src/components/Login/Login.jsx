import React from 'react';
import styles from './Login.module.css';
import LoginForm from './LoginForm';
import apartmentsApi from '../../api/apartments.api';

const Login = props => {
  const handleSubmit = async data => {
    try {
      await apartmentsApi.login(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}></div>
      <LoginForm onSubmit={handleSubmit} className={styles.form} />
    </div>
  );
};

Login.propTypes = {};

export default Login;
