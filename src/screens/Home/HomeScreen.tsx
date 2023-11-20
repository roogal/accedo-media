/*
 * @author BSG <dev@bsgroup.eu>
 * @copyright Better Software Group S.A.
 * @version: 1.0
 */
import { AppHeader, AppFooter } from "../../components";

import styles from "./HomeScreen.module.scss";

export const HomeScreen = () => {
  return (
    <div className={styles.container}>
      <AppHeader />
      <main>
        <div className={styles.listsSection}>
          HOME
        </div>
      </main>
      <AppFooter />
    </div>
  );
};
