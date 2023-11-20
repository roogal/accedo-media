/*
 * @author BSG <dev@bsgroup.eu>
 * @copyright Better Software Group S.A.
 * @version: 1.0
 */
import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";

import styles from "./NoMatchScreen.module.scss";

export const NoMatchScreen = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Gradient}></div>
      <div className={styles.Content}>
        <div className={styles.Info}>
          <img src="/logo192.png" alt="Accedo media" />
          <h1>Nothing to see here</h1>
          <h4 className={styles.H4}>
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL.
          </h4>
          <Link to={ROUTES.HOME}>
            <button className={styles.Button}>Take me back to homepage</button>
          </Link>
          <h1 className={styles.H404}>404</h1>
        </div>
      </div>
    </div>
  );
};
