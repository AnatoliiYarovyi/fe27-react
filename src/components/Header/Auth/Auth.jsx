import { Link } from 'react-router-dom';
import { paths } from '../../../router/Router';
import withLogout from '../../../HOC/withUserLogout';
import styles from './Auth.module.css';

export const Auth = props => {
  return (
    <div>
      <Link to={paths.login} className={styles.link}>
        Login
      </Link>
      <span>/</span>
      <Link to={paths.registration} className={styles.link}>
        Registration
      </Link>
    </div>
  );
};

export default withLogout(Auth);
