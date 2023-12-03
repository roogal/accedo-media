/*
 * @author BSG <dev@bsgroup.eu>
 * @copyright Better Software Group S.A.
 * @version: 1.0
 */
import { GuidHelper } from "../helpers";
import { IPlaylistItemModel } from "../models";

const PLAY_LIST_STORAGE_KEY = "playlist";
const PLAY_LIST_DATA: IPlaylistItemModel[] = [
  {
    id: "7065b65f-ca31-40dd-a498-5225ac301ef9",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    predefined: true
  },
  {
    id: "49532f97-d867-479d-bb36-0d6a9a1263d5",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    predefined: true
  },
  {
    id: "911b8145-038f-494f-ab70-be620bbbe8b3",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    predefined: true
  },
];

export class PlayerService {
  public get = async (): Promise<IPlaylistItemModel[]> => {
    if (localStorage) {
      const data = localStorage.getItem(PLAY_LIST_STORAGE_KEY);

      if (data == null) {
        localStorage.setItem(
          PLAY_LIST_STORAGE_KEY,
          JSON.stringify(PLAY_LIST_DATA)
        );

        return Promise.resolve(PLAY_LIST_DATA);
      }

      try {
        const result = JSON.parse(data);
        return Promise.resolve(result);
      } catch (error) {
        console.error("Error during getting playlist", error);
      }
    }

    return Promise.resolve(PLAY_LIST_DATA);
  };

  public add = async (url: string): Promise<IPlaylistItemModel> => {
    const item: IPlaylistItemModel = {
      id: GuidHelper.newGuid(),
      url,
      predefined: false,
    };

    if (localStorage) {
      let list: IPlaylistItemModel[] = [];
      let data = localStorage.getItem(PLAY_LIST_STORAGE_KEY);

      if (data == null) {
        list = PLAY_LIST_DATA;
      } else {
        try {
          list = JSON.parse(data) || [];
          list.push(item);
          localStorage.setItem(PLAY_LIST_STORAGE_KEY, JSON.stringify(list));
        } catch (error) {
          console.error("Error during adding to playlist", error);
        }
      }
    }

    return Promise.resolve(item);
  };

  public delete = async (id: string): Promise<string> => {
    if (localStorage) {
      let list: IPlaylistItemModel[] = [];
      let data = localStorage.getItem(PLAY_LIST_STORAGE_KEY);

      if (data) {
        try {
          list = JSON.parse(data) || [];
          const index = list.findIndex((item) => item.id === id);

          if (index >= 0) {
            list.splice(index, 1);
            localStorage.setItem(PLAY_LIST_STORAGE_KEY, JSON.stringify(list));
          }
        } catch (error) {
          console.error("Error during adding to playlist", error);
        }
      }
    }

    return Promise.resolve(id);
  };
}
