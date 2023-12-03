/*
 * @author BSG <dev@bsgroup.eu>
 * @copyright Better Software Group S.A.
 * @version: 1.0
 */
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import playerReducer from "./playerSlice";

export function createStore() {
  return configureStore({
    reducer: {
      player: playerReducer,
    },
  });
}

export const store = createStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
