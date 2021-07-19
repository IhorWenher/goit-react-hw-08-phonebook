import React from 'react';

const Contact = ({ id, name, number }) => {
  return (
    <li key={id}>
      <span>
        {name}:{number}
      </span>
    </li>
  );
};

export default Contact;
