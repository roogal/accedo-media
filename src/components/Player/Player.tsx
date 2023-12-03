/*
 * @author BSG <dev@bsgroup.eu>
 * @copyright Better Software Group S.A.
 * @version: 1.0
 */
import { useEffect, useRef, useState } from "react";
import cx from "classnames";

import { PlayerProvider } from "./PlayerContext";
import { PlayerController } from "./components";
import { IPlaylistItemModel } from "../../models";

import styles from "./Player.module.scss";

export interface IPlayerProps {
  videoId?: string;
  videoSrc?: string;
  className?: string;
  playlist?: IPlaylistItemModel[];
  onPlaylistItemChanged?: (item: IPlaylistItemModel) => void;
}

export const Player = ({
  className,
  playlist,
  videoId,
  videoSrc,
  onPlaylistItemChanged,
}: IPlayerProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const videoElementRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoElementRef.current) {
      return;
    }
    setIsMounted(true);
  }, [videoElementRef]);

  return (
    <div className={cx(styles.container, className)}>
      <video
        id={videoId}
        ref={videoElementRef}
        className={styles.video}
        crossOrigin="anonymous"
        preload="auto"
        src={videoSrc}
      ></video>
      <PlayerProvider
        player={videoElementRef.current}
        videoId={videoId}
        playlist={playlist}
        onPlaylistItemChanged={(item) => onPlaylistItemChanged?.(item)}
      >
        {isMounted && <PlayerController />}
      </PlayerProvider>
    </div>
  );
};
