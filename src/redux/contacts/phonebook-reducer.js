import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContacts,
} from './phonebook-actions';

const contacts = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactError]: (_, { payload }) => payload,
  [fetchContactSuccess]: () => null,

  [addContactError]: (_, { payload }) => payload,
  [addContactSuccess]: () => null,

  [deleteContactError]: (_, { payload }) => payload,
  [deleteContactSuccess]: () => null,
});

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const phoneBookReducers = combineReducers({
  contacts,
  loading,
  error,
  filter,
});

export default phoneBookReducers;
