import { useDispatch, useSelector } from 'react-redux';
import AuthSection from '../auth/AuthSection';
import AuthCard from '../auth/AuthCard';
import RegistrationForm from './RegistrationForm';
import styles from './Registration.module.css';
import apartmentApi from '../../api/apartments.api';
import { register } from '../../store/users/users.slice';
import { isAuth } from '../../store/users/users.selectors';
import { useFormData } from '../../hooks/useFormData';
import { useWindowResize } from '../../hooks/useWindowResize';

const initialState = {
  name: '',
  email: '',
  password: '',
};

export const Registration = props => {
  const isUserLoggedIn = useSelector(isAuth);
  const dispatch = useDispatch();
  const { formData, handleChange, setFormData } = useFormData({
    ...initialState,
  });

  const handleResize = event => console.log(event);
  useWindowResize(handleResize);

  const handleSubmit = async () => {
    try {
      const {
        data: { user, token },
      } = await apartmentApi.register(formData);

      const payload = { name: user.name, email: user.email, token };
      dispatch(register(payload));
      setFormData({ ...initialState });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <AuthSection>
      <AuthCard className={styles.form}>
        {isUserLoggedIn ? (
          'No form available'
        ) : (
          <RegistrationForm
            formData={formData}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
        )}
      </AuthCard>
    </AuthSection>
  );
};

export default Registration;
