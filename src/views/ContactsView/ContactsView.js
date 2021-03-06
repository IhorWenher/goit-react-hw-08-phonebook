import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import {
  getLoading,
  getContactsArrayLength,
} from '../../redux/contacts/phonebook-selectors';

import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';

import Styles from './ContactsView.module.css';

const ContactsView = () => {
  const loading = useSelector(getLoading);
  const contactsLength = useSelector(getContactsArrayLength);

  return (
    <div className={Styles.container}>
      <h2 className={Styles.h2}>Phonebook page</h2>
      <ContactForm />
      <h2 className={Styles.h2}>
        {contactsLength !== 0 && 'Contacts'}
        {loading && <Spinner animation="border" variant="primary" />}
      </h2>

      {contactsLength > 1 && <Filter />}
      <ContactList />
    </div>
  );
};

export default ContactsView;
