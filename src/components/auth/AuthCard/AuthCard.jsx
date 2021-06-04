import styles from './AuthCard.module.css';
import cx from 'classnames';

export const AuthCard = ({ children, className }) => {
  return (
    <section className={cx(styles.authCard, className)}>{children}</section>
  );
};

export default AuthCard;
