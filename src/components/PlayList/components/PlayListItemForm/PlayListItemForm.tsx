/*
 * @author BSG <dev@bsgroup.eu>
 * @copyright Better Software Group S.A.
 * @version: 1.0
 */
import React, { useState } from "react";
import { PlayerStore, useAppDispatch } from "../../../../store";

import styles from "./PlayListItemForm.module.scss";

export const PlayListItemForm = () => {
  const dispatch = useAppDispatch();
  const [url, setUrl] = useState("");

  const saveData = () => {
    if (!url) {
      return;
    }

    dispatch(PlayerStore.addPlaylistItem({ url }));
    setUrl("");
  };
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.code === "Enter") {
      event.preventDefault();
      saveData();
    }
  };

  const onSaveClick = (event: React.MouseEvent) => {
    event.preventDefault();
    saveData();
  };

  return (
    <div className={styles.container}>
      <form>
        <label htmlFor="input-url" className={styles.label}>
          Enter new stream URL:
        </label>
        <div className={styles.formRow}>
          <span className={styles.inputContainer}>
            <input
              id="input-url"
              className={styles.input}
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={onKeyDown}
            />
          </span>
          <button
            className={styles.button}
            disabled={!url}
            onClick={onSaveClick}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
