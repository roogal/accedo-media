/*
 * @author BSG <dev@bsgroup.eu>
 * @copyright Better Software Group S.A.
 * @version: 1.0
 */
import React from "react";
import { AppLogo } from "../AppLogo";

import styles from "./AppHeader.module.scss";

export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <AppLogo />
      </div>
      <div className={styles.headerRight}></div>
    </header>
  );
};
