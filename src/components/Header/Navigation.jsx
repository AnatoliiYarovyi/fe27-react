import React from 'react';
import { NavLink } from 'react-router-dom';
import { paths } from '../../router/Router';
import styles from './Header.module.css';

const navList = [
  {
    to: paths.heroes,
    text: 'Heroes',
    state: {
      value: 'paths.heroes',
    },
  },
  {
    to: paths.error,
    text: 'Gallery',
  },
  {
    to: paths.unauthorized,
    text: 'Contacts',
  },
];

const NavLinkItem = ({ to, children, state }) => {
  return (
    <NavLink
      to={{
        state,
        pathname: to,
      }}
      exact
      className={styles.navLink}
      activeClassName={styles.navLinkActive}
    >
      {children}
    </NavLink>
  );
};

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      {navList.map(navItem => (
        <NavLinkItem key={navItem.to} state={navItem.state} to={navItem.to}>
          {navItem.text}
        </NavLinkItem>
      ))}
    </nav>
  );
};

export default Navigation;
