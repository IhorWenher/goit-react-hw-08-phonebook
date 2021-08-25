import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  filterContacts,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
} from './phonebook-actions';

axios.defaults.baseURL = 'http://localhost:3000';

const addContact =
  ({ id, name, number }) =>
  dispatch => {
    const contact = {
      id,
      name,
      number,
    };

    dispatch(addContactRequest());

    axios
      .post('contacts', contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error)));
  };

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contact/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

const operations = {
  addContact,
  deleteContact,
};

export default operations;
