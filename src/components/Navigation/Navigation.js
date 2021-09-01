import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      exact
      className={Styles.link}
      activeClassName={Styles.activeLink}
    >
      Start
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      className={Styles.link}
      activeClassName={Styles.activeLink}
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
