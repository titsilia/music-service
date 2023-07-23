import React from "react";

import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

function Reg() {
  const navigate = useNavigate();
  const LoginBtn = () => {
    navigate("/");
  };
  return (
    <div className={styles.container_login}>
      <div className={styles.login}>
        <img src="img/logo-black.png" alt="" />
        <div className={styles.login__form}>
          <input className={styles.login__form_input} placeholder="Логин" />
          <input className={styles.login__form_input} placeholder="Пароль" />
          <input
            className={styles.login__form_input}
            placeholder="Повторите пароль"
          />
          <button
            onClick={LoginBtn}
            className={`${styles.login__form_button} ${styles.login_link} ${styles.login__form_button_login}`}
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reg;
