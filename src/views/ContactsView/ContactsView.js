import React from 'react';

import {
  getLoading,
  getContactsArrayLength,
} from '../../redux/contacts/phonebook-selectors';

import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';

import Styles from './ContactsView.module.css';

const ContactsView = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.h2}>Phonebook</h2>
      <ContactForm />
      <h2 className={Styles.h2}>
        Contacts{getLoading && <span className={Styles.span}>Loading...</span>}
      </h2>
      {getContactsArrayLength && <Filter />}
      <ContactList />
    </div>
  );
};

export default ContactsView;
