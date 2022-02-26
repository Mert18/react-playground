import {
  combineReducers,
  configureStore,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { FeatureKey } from "../featureKey";
import { RootState } from "../reducers";

/**
 * Payload
 */
export type UserPayload = {
  name: string;
};

/**
 * State
 */
export type UserState = {
  id: string;
  name: string;
};

export type UsersState = {
  users: UserState[];
};

const initialState: UsersState = {
  users: [
    {
      id: uuidv4(),
      name: "Mert",
    },
    {
      id: uuidv4(),
      name: "Ismail",
    },
  ],
};

const slice = createSlice({
  name: FeatureKey.USER,
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addUser: (state: UsersState, action: PayloadAction<string>) => {
      state.users = [
        ...state.users,
        {
          id: uuidv4(),
          name: action.payload,
        },
      ];
    },
    deleteUser: (state: UsersState, action: PayloadAction<number>) => {
      state.users = state.users.filter(({ id }: any) => id !== action.payload);
    },
  },
});

/**
 * Reducer
 */
export const userReducer = slice.reducer;

/**
 * Action
 */
export const { addUser, deleteUser } = slice.actions;

/**
 * Selector
 * @param state UserState
 */
export const userSelector = (state: RootState): UsersState => state.user;
