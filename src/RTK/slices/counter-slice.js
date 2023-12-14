import { createSlice } from "@reduxjs/toolkit";
// import { despoit } from "../../store/actions/counter_actions";
export const counterslice = createSlice({
  name: "counter",
  initialState: 1000,
  reducers: {
    withdraw: (state, action) => {
      return state - action.payload;
    },
    despoit: (state, action) => {
      return state + action.payload;
    },
  },
});
export const { withdraw, despoit } = counterslice.actions;

// export const {withdraw, despoit } = counterslice.actions

export default counterslice.reducer;
