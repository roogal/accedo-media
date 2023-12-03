/*
 * @author BSG <dev@bsgroup.eu>
 * @copyright Better Software Group S.A.
 * @version: 1.0
 */
import { useCallback, useEffect } from "react";
import { AppHeader, AppFooter, PlayList } from "../../components";
import { PlayerStore, useAppDispatch } from "../../store";

import styles from "./HomeScreen.module.scss";

export const HomeScreen = () => {
  const dispatch = useAppDispatch();

  const getPlaylist = useCallback(
    () => dispatch(PlayerStore.getPlaylist()),
    [dispatch]
  );

  useEffect(() => {
    getPlaylist();
  }, [getPlaylist]);

  return (
    <div className={styles.container}>
      <AppHeader />
      <main>
        <PlayList />
      </main>
      <AppFooter />
    </div>
  );
};
