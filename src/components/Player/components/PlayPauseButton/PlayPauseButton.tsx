/*
 * @author BSG <dev@bsgroup.eu>
 * @copyright Better Software Group S.A.
 * @version: 1.0
 */
import { usePlayerPlayingState } from "../../hooks";
import { ReactComponent as PauseIcon } from "../../../../resources/pause.svg";
import { ReactComponent as PlayIcon } from "../../../../resources/play.svg";

import styles from "./PlayPauseButton.module.scss";

export interface IPlayPauseButtonProps {
  disabled?: boolean;
}
export const PlayPauseButton = ({ disabled }: IPlayPauseButtonProps) => {
  const { isPlaying, togglePlay } = usePlayerPlayingState();

  return (
    <button
      className={styles.button}
      onClick={togglePlay}
      title={isPlaying ? "Pause" : "Play"}
      disabled={disabled}
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
};
