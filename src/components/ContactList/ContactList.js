import React from 'react';
import Contact from '../Contact';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return <Contact id={id} name={name} number={number} />;
      })}
    </ul>
  );
};

export default ContactList;
