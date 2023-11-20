/*
 * @author BSG <dev@bsgroup.eu>
 * @copyright Better Software Group S.A.
 * @version: 1.0
 */
import React from "react";
import {
  Link
} from "react-router-dom";

import { ROUTES } from "../..//constants";

import styles from "./IntroScreen.module.scss";

export const IntroScreen = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Gradient}></div>
      <img className={styles.Logo} src="/logo192.png" alt="Accedo media" />
      <div className={styles.Content}>
        <div className={styles.Info}>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3 className={styles.H3}>Ready to watch?</h3>
          <Link to={ROUTES.HOME}>
            <button className={styles.Button}>Get started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
