import React from "react";

import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useLogInMutation } from "../../redux/fetch";

function Login() {
  const navigate = useNavigate();

  const [sendFormAuth, { isSuccess, isError, data }] = useLogInMutation();

  const userAuth = async (event) => {
    event.preventDefault();
    const form = document.querySelector(`.${styles.login__form}`);
    const formData = new FormData(form);
    await sendFormAuth(formData);
  };
  if (isSuccess) {
    localStorage.setItem("token", data.access);
    localStorage.setItem("token-refresh", data.refresh);
    console.log(data);
    navigate("/tracks");
  }
  if (isError) {
    alert("тeбe сюда не нада");
  }

  const RegBtnClick = () => {
    navigate("/registration");
  };
  return (
    <div className={styles.container_login}>
      <div className={styles.login}>
        <img src="img/logo-black.png" alt="" />
        <form className={styles.login__form} onSubmit={userAuth}>
          <input
            className={styles.login__form_input}
            placeholder="Email"
            name="email"
            type="email"
          />
          <input
            className={styles.login__form_input}
            placeholder="Пароль"
            type="password"
            name="password"
          />

          <button
            className={`${styles.login__form_button} ${styles.login__form_button_login} ${styles.login_link}`}
          >
            Войти
          </button>
        </form>
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
