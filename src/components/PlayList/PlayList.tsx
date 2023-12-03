/*
 * @author BSG <dev@bsgroup.eu>
 * @copyright Better Software Group S.A.
 * @version: 1.0
 */
import React, { useCallback } from "react";
import { PlayerStore, useAppDispatch, useAppSelector } from "../../store";
import { IPlayerState } from "../../store/playerSlice";
import { PlayListItem, PlayListItemForm } from "./components";

import styles from "./PlayList.module.scss";
import { Player } from "../Player";
import { IPlaylistItemModel } from "../../models";

export const PlayList = () => {
  const dispatch = useAppDispatch();
  const { current, playlist } = useAppSelector<IPlayerState>(
    (store) => store.player
  );

  const onPlaylistItemChanged = useCallback(
    (item: IPlaylistItemModel) => {
      return dispatch(PlayerStore.setCurrent(item));
    },
    [dispatch]
  );

  return (
    <div className={styles.container}>
      <div className={styles.playerConteiner}>
        <Player
          videoId={current?.id}
          videoSrc={current?.url}
          className={styles.player}
          playlist={playlist}
          onPlaylistItemChanged={onPlaylistItemChanged}
        />
      </div>
      <PlayListItemForm />
      <div id="playlist-modal" className={styles.modalContainer}></div>
      <ul className={styles.list}>
        {playlist?.map((item) => (
          <PlayListItem key={item.url} data={item} isActive={item.id === current?.id} />
        ))}
      </ul>
    </div>
  );
};
