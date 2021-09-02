import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { Form, Button } from 'react-bootstrap';

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
      <h1 className={Styles.h1}>Enter login</h1>
      <Form onSubmit={handleSubmit} className={Styles.form} autoComplete="off">
        <Form.Group className="mb-3" controlId="formLoginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLoginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className={Styles.button}>
          Enter
        </Button>
      </Form>
    </div>
  );
};

export default LoginView;
