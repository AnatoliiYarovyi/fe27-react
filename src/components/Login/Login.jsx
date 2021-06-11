import { useDispatch } from 'react-redux';
import styles from './Login.module.css';
import LoginForm from './LoginForm';
import apartmentsApi from '../../api/apartments.api';
import AuthSection from '../auth/AuthSection';
import AuthCard from '../auth/AuthCard';
import { login } from '../../store/users/users.slice';
import { useFormData } from '../../hooks/useFormData';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const dispatch = useDispatch();
  const { formData, handleChange } = useFormData({
    ...initialState,
  });

  const handleSubmit = async () => {
    try {
      const { data } = await apartmentsApi.login(formData);
      const { user, token } = data;

      dispatch(
        login({
          token,
          email: user.email,
          name: user.name,
        }),
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthSection>
      <AuthCard className={styles.form}>
        <LoginForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </AuthCard>
    </AuthSection>
  );
};

Login.propTypes = {};

export default Login;
