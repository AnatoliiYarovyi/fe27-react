import { isAuth } from '../store/users/users.selectors';
import { connect } from 'react-redux';

const withUserAuth = Component => {
  return props => {
    if (!props.isUserLoggedIn) {
      return null;
    }
    return <Component {...props} />;
  };
};

const mapStateToProps = state => ({
  isUserLoggedIn: isAuth(state),
});

const withAuth = component => connect(mapStateToProps)(withUserAuth(component));

export default withAuth;
