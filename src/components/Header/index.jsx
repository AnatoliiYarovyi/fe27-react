import { connect } from 'react-redux';
import Logo from '../Logo';
import Container from '../UI/Container';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import CheckBox from '../UI/Checkbox';
import { toggleTheme } from '../../store/actions';
import styles from './Header.module.css';

const Header = ({ showNav = true, theme, changeTheme }) => {
  const isDarkTheme = theme === 'dark';

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <div className={styles.actions}>
            <Link to="/" className={styles.headerLogo}>
              <Logo
                className={styles.headerLogo}
                laptopClassName={styles.headerLaptop}
              />
            </Link>
            <CheckBox
              onChange={changeTheme}
              className={styles.themeSelector}
              checked={isDarkTheme}
            >
              Theme: {theme}
            </CheckBox>
          </div>
          {showNav && <Navigation />}
        </div>
      </Container>
    </header>
  );
};

Header.propTypes = {
  foo: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = dispatch => ({
  changeTheme: () => {
    dispatch(toggleTheme());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
