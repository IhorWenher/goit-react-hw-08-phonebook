import React from 'react';
import Styles from './RegisterView.module.css';

const RegisterView = () => {
  return (
    <div>
      <h1>Страница регистрации</h1>

      <form
        /* onSubmit={handleSubmit}  */ style={Styles.form}
        autoComplete="off"
      >
        <label style={Styles.label}>
          Имя
          <input
            type="text"
            name="name" /* value={name} onChange={handleChange} */
          />
        </label>

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

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegisterView;
