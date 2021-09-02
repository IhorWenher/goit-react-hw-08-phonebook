import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Styles from './Navigation.module.css';
import { authSelectors } from '../../redux/auth';

const Navigation = () => {
  const isLogin = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={Styles.nav}>
      <NavLink
        to="/"
        exact
        className={Styles.link}
        activeClassName={Styles.activeLink}
      >
        Start
      </NavLink>

      {isLogin && (
        <NavLink
          to="/contacts"
          exact
          className={Styles.link2}
          activeClassName={Styles.activeLink2}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
