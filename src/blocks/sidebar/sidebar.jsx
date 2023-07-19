import React from "react";

import styles from "./sidebar.module.css";


import SidebarPersonal from "./sidebar-components/sidebar-personal";
import SidebarItem from "./sidebar-components/sidebar-item";

import SkelSidebarImage from "../components/skeleton/skel-sibedar_image";

const { useState, useEffect } = React;

function SlideBar() {
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
    <div className={`${styles.main__sidebar} ${styles.sidebar}`}>
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
              <SidebarItem img="img/playlist01.png" link="/daily"/>
              <SidebarItem img="img/playlist02.png" link="/hits" />
              <SidebarItem img="img/playlist03.png" link="/indie"/>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SlideBar;
