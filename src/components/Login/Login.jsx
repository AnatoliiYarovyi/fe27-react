import React from 'react';
import styles from './Login.module.css';
import LoginForm from './LoginForm';
import apartmentsApi from '../../api/apartments.api';
import AuthSection from '../auth/AuthSection';
import AuthCard from '../auth/AuthCard';

const Login = props => {
  const handleSubmit = async data => {
    try {
      await apartmentsApi.login(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthSection>
      <AuthCard className={styles.form}>
        <LoginForm onSubmit={handleSubmit} />
      </AuthCard>
    </AuthSection>
  );
};

Login.propTypes = {};

export default Login;
