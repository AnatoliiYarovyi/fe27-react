import { useDispatch } from 'react-redux';
import withAuth from '../../../HOC/withAuth';
import { ReactComponent } from './icon/exit.svg';
import PropTypes from 'prop-types';
import styles from './LogoutButton.module.css';
import { logout } from '../../../store/users/users.slice';
import cx from 'classnames';

const LogoutButton = ({ className }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <button onClick={logoutHandler} className={cx(styles.button, className)}>
      <ReactComponent className={styles.icon} />
    </button>
  );
};

LogoutButton.propTypes = {
  className: PropTypes.string,
};

export default withAuth(LogoutButton);
