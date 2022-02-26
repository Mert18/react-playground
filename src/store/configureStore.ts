import {
  configureStore,
  EnhancedStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { Env } from "../constants";
import { rootReducer, RootState } from "./reducers";

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#correct-typings-for-the-dispatch-type
 */

export const store = configureStore({
  reducer: rootReducer,
  devTools: Env.NODE_ENV === "development",
});
