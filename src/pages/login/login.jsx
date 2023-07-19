import React from "react";

import styles from "./login.module.css";
import { Link } from "react-router-dom";

function Login() {
  const loginBtnClick = () => {
    localStorage.setItem('login', 'test');
  }
  return (
    <div className={styles.container_login}>
      <div className={styles.login}>
        <img src="img/logo-black.png" alt="" />
        <form className={styles.login__form}>
          <input className={styles.login__form_input} placeholder="Логин" />
          <input className={styles.login__form_input} placeholder="Пароль" />

          <button
            className={`${styles.login__form_button} ${styles.login__form_button_login}`}
          >
            <Link className={styles.login_link} to="/tracks" onClick={loginBtnClick}>
              Войти
            </Link>
          </button>
        </form>
        <button
          className={`${styles.login__form_button} ${styles.login__form_button_reg}`}
        >
          <Link className={styles.reg_link} to="/registration">
            Зарегистрироваться
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
