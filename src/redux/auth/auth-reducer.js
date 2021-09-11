/* import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserError,
  registerRequest,
  registerSuccess,
  registerError,
  logInRequest,
  logInSuccess,
  logInError,
  logOutRequest,
  logOutSuccess,
  logOutError,
} from './auth-actions';

const initialState = { name: null, email: null };

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [logInSuccess]: (_, { payload }) => payload.token,
  [logOutSuccess]: () => null,
});

const user = createReducer(initialState, {
  [fetchUserSuccess]: (_, { payload }) => payload,
  [registerSuccess]: (_, { payload }) => payload.user,
  [logInSuccess]: (_, { payload }) => payload.user,
  [logOutSuccess]: () => initialState,
});

const isFetching = createReducer(false, {
  [fetchUserRequest]: () => true,
  [fetchUserSuccess]: () => false,
  [fetchUserError]: () => false,

  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,

  [logInRequest]: () => true,
  [logInSuccess]: () => false,
  [logInError]: () => false,

  [logOutRequest]: () => true,
  [logOutSuccess]: () => false,
  [logOutError]: () => false,
});

const isLoggedIn = createReducer(false, {
  [fetchUserSuccess]: () => true,
  [registerSuccess]: () => true,
  [logInSuccess]: () => true,
  [logOutSuccess]: () => false,
});

const setError = (_, { payload }) => {
  switch (payload) {
    case 400:
      return 'Incorrect data';
    case 401:
      return 'No authorize';
    case 500:
      return 'Please, try again!';
    default:
      return 'error';
  }
};

const error = createReducer(null, {
  [fetchUserError]: setError,
  [registerError]: setError,
  [logInError]: setError,
  [logOutError]: setError,
});

const authReducers = combineReducers({
  user,
  token,
  isFetching,
  isLoggedIn,
  error,
});

export default authReducers;
 */
