import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/contacts/phonebook-operation';
import { getVisibleContacts } from '../../redux/contacts/phonebook-selectors';

import { Button } from 'react-bootstrap';
import Styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getVisibleContacts);

  return (
    <ul className={Styles.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={Styles.li}>
            <span>
              {name}: {number}
            </span>

            <Button
              variant="primary"
              type="button"
              onClick={() => dispatch(operations.deleteContact(id))}
              /* className={Styles.button} */
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
