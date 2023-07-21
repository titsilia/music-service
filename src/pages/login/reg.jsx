import React from "react";

import styles from "./login.module.css";
import { Link } from "react-router-dom";

function Reg() {
    return (
        <div className={styles.container_login}>
            <div className={styles.login}>
                <img src="img/logo-black.png" alt="" />
                <form className={styles.login__form}>
                    <input className={styles.login__form_input} placeholder="Логин"/>
                    <input className={styles.login__form_input} placeholder="Пароль"/>
                    <input className={styles.login__form_input} placeholder="Повторите пароль"/>
                    <button className={`${styles.login__form_button} ${styles.login__form_button_login}`}><Link className={styles.login_link} to="/">Зарегистрироваться</Link></button>
                </form>
            </div>
        </div>
    );
}
    
export default Reg;