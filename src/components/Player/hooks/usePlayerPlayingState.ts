/*
 * @author BSG <dev@bsgroup.eu>
 * @copyright Better Software Group S.A.
 * @version: 1.0
 */
import { useCallback, useEffect, useState } from "react";
import { usePlayer } from "../PlayerContext";

export const usePlayerPlayingState = () => {
  const { player } = usePlayer();

  const [isPlaying, setIsPlaying] = useState<boolean>(
    player ? !player?.paused : false
  );

  const togglePlay = useCallback(() => {
    if (player?.paused || player?.paused === undefined) {
      player?.play();
      setIsPlaying(true);
    } else {
      player?.pause();
      setIsPlaying(false);
    }
  }, [player]);

  useEffect(() => {
    if (player) {
      player.onplay = () => {
        setIsPlaying(true);
      };

      player.onpause = () => {
        setIsPlaying(false);
      };

      player.onended = () => {
        setIsPlaying(false);
      };

      player.onloadeddata = () => {
        setIsPlaying(false);
        player.play();
      };
    }
  }, [player]);

  return { isPlaying, togglePlay };
};
