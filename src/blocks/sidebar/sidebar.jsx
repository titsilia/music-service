import React from "react";

import styles from "./sidebar.module.css";
import color from "../../themes.module.css";

import { useThemeContext } from "../../context/theme";

import SidebarPersonal from "./sidebar-components/sidebar-personal";
import SidebarItem from "./sidebar-components/sidebar-item";

import SkelSidebarImage from "../components/skeleton/skel-sibedar_image";

const { useState, useEffect } = React;

function SlideBar() {
  const { theme } = useThemeContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timerId);
    };
  });

  return (
    <div
      className={`${styles.main__sidebar} ${styles.sidebar} ${
        theme === "light"
          ? color.light__background
          : color.dark__main_background
      } `}
    >
      <SidebarPersonal name="Sergey.Ivanov" />

      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          {isLoading ? (
            <>
              <SkelSidebarImage />
              <SkelSidebarImage />
              <SkelSidebarImage />
            </>
          ) : (
            <>
              <SidebarItem img="img/playlist01.png" link="/category/1" />
              <SidebarItem img="img/playlist02.png" link="/category/2" />
              <SidebarItem img="img/playlist03.png" link="/category/3" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SlideBar;
