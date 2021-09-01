import React from 'react';
import Styles from './AppBar.module.css';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';

const AppBar = () => {
  return (
    <header className={Styles.container}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
};

export default AppBar;
