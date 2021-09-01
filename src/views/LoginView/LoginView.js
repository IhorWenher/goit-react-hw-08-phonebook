import React from 'react';
import Styles from './LoginView.module.css';

const LoginView = () => {
  return (
    <div>
      <h1>LogIn page</h1>
      <form
        /* onSubmit={handleSubmit}  */ style={Styles.form}
        autoComplete="off"
      >
        <label style={Styles.label}>
          Почта
          <input
            type="email"
            name="email"
            //value={email}
            //onChange={handleChange}
          />
        </label>

        <label style={Styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            //value={password}
            //onChange={handleChange}
          />
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginView;
