import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isAuth } from '../../../store/users/users.selectors';

export const PublicRoute = ({ component: Component, path, exact }) => {
  const isUserLoggedIn = useSelector(isAuth);

  return (
    <Route
      path={path}
      exact={exact}
      render={props => {
        return !isUserLoggedIn ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.elementType,
  path: PropTypes.string,
  exact: PropTypes.bool,
};

export default PublicRoute;
