import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import Styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={Styles.container}>
      <NavLink to="/register" exact className={Styles.link}>
        <Button variant="primary" className={Styles.button}>
          Registration
        </Button>
      </NavLink>

      <NavLink to="/login" exact className={Styles.link}>
        <Button variant="outline-primary" className={Styles.button}>
          Log In
        </Button>
      </NavLink>
    </div>
  );
};

export default AuthNav;
