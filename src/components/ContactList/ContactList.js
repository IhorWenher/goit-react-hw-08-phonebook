import React from 'react';
import Styles from './ContactList.module.css';
//import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={Styles.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={Styles.li}>
            <span>
              {name}: {number}
            </span>
            <button
              type="button"
              onClick={() => onDeleteContact(id)}
              className={Styles.button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

/* ContactList.propTypes = {
  contacts: PropTypes.arrayOf({ name: PropTypes.string }).isRequired,
};*/
export default ContactList;
