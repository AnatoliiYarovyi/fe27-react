import { Route, Switch, Redirect } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import asyncComponent from '../helpers/asyncComponent';
import ProtectedRoute from '../components/Routes/ProtectedRoute';
import PublicRoute from '../components/Routes/PublicRoute';

const HeroesPage = asyncComponent({
  loader: () => import('../pages/HeroesPage'),
});
const Homepage = lazy(() => import('../pages/Homepage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const HeroPage = lazy(() => import('../pages/HeroPage'));
const AirQualityPage = lazy(() => import('../pages/AirQualityPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const Unauthorized = lazy(() => import('../pages/Unauthorized'));

export const paths = {
  homepage: '/',
  heroes: '/heroes',
  error: '/error',
  airQuality: '/air-quality',
  hero: id => `/heroes/${id}`,
  unauthorized: '/unauthorized',
  login: '/login',
  registration: '/registration',
};

const routes = [
  {
    path: paths.homepage,
    component: Homepage,
    exact: true,
    requireLoggedOut: false,
  },
  {
    path: paths.heroes,
    component: HeroesPage,
    exact: true,
    requireLoggedOut: false,
  },
  {
    path: paths.hero(':id'),
    component: HeroPage,
    exact: true,
    requireLoggedOut: false,
  },
  {
    path: paths.airQuality,
    component: AirQualityPage,
    exact: true,
    requireLoggedOut: false,
    requireAuth: true,
  },
  {
    path: paths.error,
    component: ErrorPage,
    requireLoggedOut: false,
  },
  {
    path: paths.unauthorized,
    component: Unauthorized,
    requireLoggedOut: false,
  },
  {
    path: paths.login,
    component: LoginPage,
    requireLoggedOut: true,
  },
  {
    path: paths.registration,
    component: RegistrationPage,
    requireLoggedOut: true,
  },
];

const Router = () => {
  return (
    <Suspense fallback={'loading'}>
      <Switch>
        {routes.map(route => {
          if (route.requireAuth) {
            return (
              <ProtectedRoute
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          }

          if (route.requireLoggedOut) {
            return (
              <PublicRoute
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          }

          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
};

export default Router;
