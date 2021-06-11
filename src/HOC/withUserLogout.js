import { isAuth } from '../store/users/users.selectors';
import { connect } from 'react-redux';

const withUserLogout = Component => {
  return props => {
    if (props.isUserLoggedIn) {
      return null;
    }
    return <Component {...props} />;
  };
};

const mapStateToProps = state => ({
  isUserLoggedIn: isAuth(state),
});

const withLogout = component =>
  connect(mapStateToProps)(withUserLogout(component));

export default withLogout;
