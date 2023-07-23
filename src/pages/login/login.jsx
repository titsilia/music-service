import React from "react";

import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const loginBtnClick = () => {
    localStorage.setItem("login", "test");

    navigate("/tracks");
  };

  const RegBtnClick = () => {
    navigate("/registration");
  };
  return (
    <div className={styles.container_login}>
      <div className={styles.login}>
        <img src="img/logo-black.png" alt="" />
        <div className={styles.login__form}>
          <input className={styles.login__form_input} placeholder="Логин" />
          <input className={styles.login__form_input} placeholder="Пароль" />

          <button
            onClick={loginBtnClick}
            className={`${styles.login__form_button} ${styles.login__form_button_login} ${styles.login_link}`}
          >
            Войти
          </button>
        </div>
        <button
          onClick={RegBtnClick}
          className={`${styles.login__form_button} ${styles.reg_link} ${styles.login__form_button_reg}`}
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
}

export default Login;
