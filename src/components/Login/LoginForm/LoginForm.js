import { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import styles from './LoginForm.module.css';
import cx from 'classnames';

const LoginForm = ({ onSubmit, onChange, className, formData }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const switchPasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    onChange({ name, value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cx(styles.form, className)}
      autoComplete="false"
    >
      <h2 className={styles.title}>Login</h2>
      <Input
        className={styles.input}
        name="email"
        type="email"
        placeHolder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <div className={styles.passWrapper}>
        <Input
          className={styles.input}
          name="password"
          type={passwordVisibility ? 'text' : 'password'}
          placeHolder="Password"
          value={formData.password}
          onChange={handleChange}
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
