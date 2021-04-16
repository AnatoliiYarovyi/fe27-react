import Logo from '../Logo';
import Container from '../UI/Container';
import PropTypes from 'prop-types';

const Header = ({ foo = 'Default', showNav = true }) => {
  return (
    <header className="header">
      <Container>
        <div className="header__inner'>
          <a href="/" className="header-logo">
            <Logo className="header-logo" laptopClassName="header-laptop" />
          </a>
          {showNav && (
            <nav className="nav">
              <a href="/" className="nav-link">
                {foo}
              </a>
              <a href="/" className="nav-link">
                Gallery
              </a>
              <a href="/" className="nav-link">
                Contacts
              </a>
            </nav>
          )}
        </div>
      </Container>
    </header>
  );
};

Header.propTypes = {
  foo: PropTypes.string,
};

export default Header;
