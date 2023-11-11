// userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  value: number;
}

const initialState: UserState = { value: 0 };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    logout: (state) => {
      state.value = 0;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
