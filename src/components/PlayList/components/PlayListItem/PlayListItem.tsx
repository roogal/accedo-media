/*
 * @author BSG <dev@bsgroup.eu>
 * @copyright Better Software Group S.A.
 * @version: 1.0
 */
import { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import cx from "classnames";

import { IPlaylistItemModel } from "../../../../models";
import { PlayerStore, useAppDispatch } from "../../../../store";
import { Modal } from "../../../Modal";

import styles from "./PlayListItem.module.scss";

export interface IPlayListItemProps {
  data: IPlaylistItemModel;
  isActive: boolean;
}

export const PlayListItem = ({ data, isActive }: IPlayListItemProps) => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const playlistModalContainer = document.getElementById("playlist-modal");

  const onConfirm = useCallback(
    () => dispatch(PlayerStore.deletePlaylistItem(data.id)),
    [dispatch, data]
  );

  const onClick = useCallback(
    () => dispatch(PlayerStore.setCurrent(data)),
    [dispatch, data]
  );

  return (
    <li className={cx(styles.container, { "active": isActive })}>
      <div className={cx(styles.url, { [styles.urlActive]: isActive })} onClick={onClick}>
        {data.url}
      </div>
      <button
        type="button"
        className={styles.button}
        onClick={() => setShowModal(true)}
        disabled={data.predefined || isActive}
        title={data.predefined ? "Item is predefined" : "Delete item"}
      >
        DELETE
      </button>
      {showModal &&
        playlistModalContainer &&
        createPortal(
          <Modal
            title={
              <span>
                Are you sure to delete this url: <b>{data.url}</b>?
              </span>
            }
            onCancel={() => setShowModal(false)}
            onConfirm={onConfirm}
          />,
          playlistModalContainer
        )}
    </li>
  );
};
