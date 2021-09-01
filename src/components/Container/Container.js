import React from 'react';
import { Children } from 'react';
import Styles from './Container.module.css';

const Container = () => {
  return <div className={Styles.container}>{Children}</div>;
};

export default Container;
