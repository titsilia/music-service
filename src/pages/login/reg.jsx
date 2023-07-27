import React, { useEffect } from "react";

import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../../redux/fetch";

function Reg() {
  const navigate = useNavigate();

  const [sendFormRegistration, { isSuccess, isError }] = useSignUpMutation();

  const userRegistration = async (event) => {
    event.preventDefault();
    const form = document.querySelector(`.${styles.login__form}`);
    const formData = new FormData(form);
    await sendFormRegistration(formData);
  };
  if (isSuccess) {
    navigate("/");
  }
  if (isError) {
    alert("ткбк сюда не нада");
  }
  return (
    <div className={styles.container_login}>
      <div className={styles.login}>
        <img src="img/logo-black.png" alt="" />
        <form className={styles.login__form} onSubmit={userRegistration}>
          <input
            className={styles.login__form_input}
            placeholder="Логин"
            name="username"
          />
          <input
            className={styles.login__form_input}
            placeholder="Пароль"
            type="password"
            name="password"
          />
          <input
            className={styles.login__form_input}
            placeholder="Введите email"
            type="email"
            name="email"
          />
          <button
            className={`${styles.login__form_button} ${styles.login_link} ${styles.login__form_button_login}`}
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reg;
