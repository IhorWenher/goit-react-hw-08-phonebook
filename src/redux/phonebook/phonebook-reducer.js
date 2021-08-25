import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContacts,
} from './phonebook-actions';

const contactsReducer = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loadingReducer = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
});

const filterReducer = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const phoneBookReducers = combineReducers({
  contacts: contactsReducer,
  loading: loadingReducer,
  filter: filterReducer,
});

export default phoneBookReducers;
