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

axios.defaults.baseURL = 'http://localhost:3030';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

const addContact = contact => async dispatch => {
  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(data));
    console.log(data);
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
