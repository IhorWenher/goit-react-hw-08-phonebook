import React from 'react';
import Styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={Styles.label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={Styles.input}
      />
    </label>
  );
};

export default Filter;
