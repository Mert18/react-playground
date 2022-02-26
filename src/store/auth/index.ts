import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

type User = {
  id: string;
  name: string;
};

const initialState: any = {
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

const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<string>) {
      state.users = [
        ...state.users,
        {
          id: uuidv4(),
          name: action.payload,
        },
      ];
    },
    deleteUser(state, action: PayloadAction<string>) {},
  },
});

export const { addUser, deleteUser } = counterSlice.actions;
export default counterSlice.reducer;
