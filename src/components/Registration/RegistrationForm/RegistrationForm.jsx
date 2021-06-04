import Input from '../../UI/Input';
import Button from '../../UI/Button';
import styles from './RegistrationForm.module.css';

export const RegistrationForm = ({ onSubmit, formData, onChange }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(formData);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    onChange({ value, name });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Register now</h2>
      <Input
        className={styles.input}
        name="name"
        placeHolder="Name"
        onChange={handleChange}
        value={formData.name}
      />
      <Input
        className={styles.input}
        name="email"
        type="email"
        placeHolder="Email"
        onChange={handleChange}
        value={formData.email}
      />
      <Input
        className={styles.input}
        name="password"
        type="password"
        placeHolder="Password"
        onChange={handleChange}
        value={formData.password}
      />
      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegistrationForm;
