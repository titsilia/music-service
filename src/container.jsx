import React from "react";

const { useState } = React;
import { AppRoutes } from "./routes";

import styles from "./container.module.css";

import { ThemeContext, themes, useThemeContext } from './context/theme'

import light from "./light.module.css";

function Container() {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }

    setCurrentTheme(themes.dark);
  }

  const { theme } = useThemeContext();

  console.log(theme);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme}}>
      <div className={`${styles.wrapper} ${theme === 'light' ? light.light_background : ''}`}>
        <div className={`${styles.container} ${theme === 'light' ? light.light_background : ''}`}>
          <AppRoutes />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default Container;
