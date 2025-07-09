import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: "default value",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setValue: (state, actions: PayloadAction<string>) => {
      state.value = actions.payload;
    },
  },
});

export const { setValue } = counterSlice.actions;

export default counterSlice.reducer;
