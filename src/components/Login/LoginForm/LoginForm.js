import { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import styles from './LoginForm.module.css';
import cx from 'classnames';

const LoginForm = ({ onSubmit, className }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const switchPasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    onSubmit?.(data);
  };

  return (
    <form onSubmit={handleSubmit} className={cx(styles.form, className)}>
      <h2 className={styles.title}>Login</h2>
      <Input
        className={styles.input}
        name="email"
        type="email"
        placeHolder="Email"
        onChange={event => setEmail(event.target.value)}
      />
      <div className={styles.passWrapper}>
        <Input
          className={styles.input}
          name="password"
          type={passwordVisibility ? 'text' : 'password'}
          placeHolder="Password"
          onChange={event => setPassword(event.target.value)}
        />

        <Button
          className={styles.showPass}
          onClick={switchPasswordVisibility}
          type="button"
        >
          O
        </Button>
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
