import Logo from '../Logo';
import Container from '../UI/Container';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import styles from './Header.module.css';

const Header = ({ showNav = true }) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <Link to="/" className={styles.headerLogo}>
            <Logo
              className={styles.headerLogo}
              laptopClassName={styles.headerLaptop}
            />
          </Link>
          {showNav && <Navigation />}
        </div>
      </Container>
    </header>
  );
};

Header.propTypes = {
  foo: PropTypes.string,
};

export default Header;
