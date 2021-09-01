import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={Styles.link}
        activeClassName={Styles.activeLink}
      >
        Registration
      </NavLink>

      <NavLink
        to="/login"
        exact
        className={Styles.link}
        activeClassName={Styles.activeLink}
      >
        LogIn
      </NavLink>
    </div>
  );
};

export default AuthNav;
