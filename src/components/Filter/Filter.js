import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts/phonebook-actions';
import { getFilter } from '../../redux/contacts/phonebook-selectors';
import PropTypes from 'prop-types';

import { Form } from 'react-bootstrap';
import Styles from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={Styles.container}>
      <Form.Label className={Styles.label}>Find contact by name</Form.Label>
      <Form.Control
        type="text"
        value={value}
        onChange={e => dispatch(actions.filterContacts(e.currentTarget.value))}
        className={Styles.input}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;
