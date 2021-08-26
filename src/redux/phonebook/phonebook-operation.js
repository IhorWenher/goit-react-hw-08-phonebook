import axios from 'axios';

import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
} from './phonebook-actions';

axios.defaults.baseURL = 'http://localhost:3000';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

const addContact =
  ({ id, name, number }) =>
  async dispatch => {
    const contact = {
      id,
      name,
      number,
    };

    dispatch(addContactRequest());

    try {
      const { data } = await axios.post('contacts', contact);
      dispatch(addContactSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(addContactError(error));
    }
  };

const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    const { data } = await axios.delete(`/contact/${id}`);
    dispatch(deleteContactSuccess(data));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

const operations = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default operations;
