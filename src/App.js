import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Styles from './App.module.css';

function App() {
  const contactsLength = useSelector(
    state => state.phonebook.contacts.length > 1,
  );

  const loading = useSelector(state => state.phonebook.loading);

  return (
    <div className={Styles.container}>
      <h1 className={Styles.h1}>Phonebook</h1>
      <ContactForm />
      <h2 className={Styles.h2}>
        Contacts{loading && <span className={Styles.span}>Loading...</span>}
      </h2>
      {contactsLength && <Filter />}
      <ContactList />
    </div>
  );
}

export default App;
