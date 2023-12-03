/*
 * @author BSG <dev@bsgroup.eu>
 * @copyright Better Software Group S.A.
 * @version: 1.0
 */
import { createContext, ReactNode, useContext } from "react";
import { IPlaylistItemModel } from "../../models";

type PlayerContextValue = {
  player: HTMLVideoElement | null;
  videoId?: string;
  playlist?: IPlaylistItemModel[];
  onPlaylistItemChanged?: (item: IPlaylistItemModel) => void;
};

type PlayerProviderProps = PlayerContextValue & {
  children: ReactNode;
};

const PlayerContext = createContext<PlayerContextValue>(
  {} as PlayerContextValue
);

export const PlayerProvider = (props: PlayerProviderProps) => {
  const { player, children, videoId, playlist, onPlaylistItemChanged } = props;

  return (
    <PlayerContext.Provider
      value={{ player, videoId, playlist, onPlaylistItemChanged }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = (): PlayerContextValue => {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("Component beyond PlayerContext");
  }

  return context;
};
