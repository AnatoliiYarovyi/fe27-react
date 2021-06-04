import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isAuth } from '../../../store/users/users.selectors';
import { paths } from '../../../router/Router';

const ProtectedRoute = ({ component: Component, path, exact }) => {
  const isUserLoggedIn = useSelector(isAuth);
  return (
    <Route
      path={path}
      exact={exact}
      render={props => {
        return isUserLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={paths.login} />
        );
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.elementType,
  path: PropTypes.string,
  exact: PropTypes.bool,
};

export default ProtectedRoute;
