import { Route, Switch, Redirect } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import asyncComponent from '../helpers/asyncComponent';

const HeroesPage = asyncComponent({
  loader: () => import('../pages/HeroesPage'),
});
const Homepage = lazy(() => import('../pages/Homepage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const HeroPage = lazy(() => import('../pages/HeroPage'));
const Unauthorized = lazy(() => import('../pages/Unauthorized'));

export const paths = {
  homepage: '/',
  heroes: '/heroes',
  error: '/error',
  unauthorized: '/unauthorized',
  hero: id => `/heroes/${id}`,
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
    exact: true,
  },
  {
    path: paths.hero(':id'),
    component: HeroPage,
    exact: true,
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
    <Suspense fallback={'loading'}>
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
    </Suspense>
  );
};

export default Router;
