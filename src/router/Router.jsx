import Homepage from '../pages/Homepage';
import HeroesPage from '../pages/HeroesPage';
import ErrorPage from '../pages/ErrorPage';
import Unauthorized from '../pages/Unauthorized';
import { Route, Switch, Redirect } from 'react-router-dom';

export const paths = {
  homepage: '/',
  heroes: '/heroes',
  error: '/error',
  unauthorized: '/unauthorized',
};

const routes = [
  {
    path: paths.homepage,
    component: Homepage,
    exact: true,
  },
  {
    path: paths.heroes,
    component: HeroesPage,
  },
  {
    path: paths.error,
    component: ErrorPage,
  },
  {
    path: paths.unauthorized,
    component: Unauthorized,
  },
];

const Router = () => {
  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <Redirect to="/error" />
    </Switch>
  );
};

export default Router;
