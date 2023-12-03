/*
 * @author BSG <dev@bsgroup.eu>
 * @copyright Better Software Group S.A.
 * @version: 1.0
 */
import { useCallback, useMemo } from "react";

import { PlayPauseButton } from "../PlayPauseButton";
import { usePlayer } from "../../PlayerContext";

import { ReactComponent as ForwardIcon } from "../../../../resources/forward.svg";
import { ReactComponent as BackwardIcon } from "../../../../resources/backward.svg";
import { ReactComponent as PreviousIcon } from "../../../../resources/previous.svg";
import { ReactComponent as NextIcon } from "../../../../resources/next.svg";

import styles from "./PlayerController.module.scss";

export const PlayerController = () => {
  const { player, videoId, playlist, onPlaylistItemChanged } = usePlayer();

  const currentPlaylistIndex = useMemo(() => {
    return playlist?.length
      ? playlist.findIndex((row) => row.id === videoId)
      : -1;
  }, [videoId, playlist]);

  const onFastForwardClick = useCallback(() => {
    if (player && !player?.paused && !player?.ended) {
      player.currentTime += 10;
    }
  }, [player]);

  const onBackwardClick = useCallback(() => {
    if (player && !player?.paused && !player?.ended) {
      player.currentTime > 10
        ? (player.currentTime -= 10)
        : (player.currentTime = 0);
    }
  }, [player]);

  const onPreviousClick = useCallback(() => {
    if (!player || !playlist?.length) {
      return;
    }

    if (currentPlaylistIndex > 0) {
      const item = playlist[currentPlaylistIndex - 1];

      if (item) {
        onPlaylistItemChanged?.(item);
      }
    }
  }, [player, currentPlaylistIndex, onPlaylistItemChanged, playlist]);

  const onNextClick = useCallback(() => {
    if (!player || !playlist?.length) {
      return;
    }

    if (currentPlaylistIndex < playlist.length - 1) {
      const item = playlist[currentPlaylistIndex + 1];

      if (item) {
        onPlaylistItemChanged?.(item);
      }
    }
  }, [player, currentPlaylistIndex, onPlaylistItemChanged, playlist]);

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {playlist?.length && (
          <button
            key="previous"
            onClick={onPreviousClick}
            title="Previous"
            disabled={currentPlaylistIndex <= 0}
          >
            <PreviousIcon />
          </button>
        )}
        <button key="backward" onClick={onBackwardClick} title="Backward 10s">
          <BackwardIcon />
        </button>
        <PlayPauseButton key="play-pause" />
        <button
          key="fast-forward"
          onClick={onFastForwardClick}
          title="Fast Forward 10s"
        >
          <ForwardIcon />
        </button>
        {playlist?.length && (
          <button
            key="next"
            onClick={onNextClick}
            title="Next"
            disabled={currentPlaylistIndex === playlist?.length - 1}
          >
            <NextIcon />
          </button>
        )}
      </div>
    </div>
  );
};
