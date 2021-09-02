import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
//import { Form, Button } from 'react-bootstrap';

import Styles from './LoginView.module.css';

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={Styles.container}>
      <h1>Enter login</h1>
      <form onSubmit={handleSubmit} className={Styles.form} autoComplete="off">
        <label className={Styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={Styles.inputEmail}
          />
        </label>

        <label className={Styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={Styles.inputPassword}
          />
        </label>

        <button type="submit" className={Styles.button}>
          Enter
        </button>
      </form>
    </div>
  );
};

export default LoginView;
