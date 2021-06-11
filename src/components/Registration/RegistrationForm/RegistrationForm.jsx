import Input from '../../UI/Input';
import Button from '../../UI/Button';
import styles from './RegistrationForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(2).max(12),
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .required(),
});

export const RegistrationForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { errors } = formState;
  const submitForm = async data => {
    await onSubmit(data);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
      <h2>Register now</h2>
      <Input
        className={styles.input}
        placeHolder="Name"
        {...register('name')}
        error={errors.name?.message}
      />

      <Input
        className={styles.input}
        type="email"
        placeHolder="Email"
        {...register('email')}
        error={errors.email?.message}
      />

      <Input
        className={styles.input}
        {...register('password')}
        type="password"
        placeHolder="Password"
        error={errors.password?.message}
      />
      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegistrationForm;
