import { createSlice } from "@reduxjs/toolkit";

export const contestantState = createSlice({
  name: "contestant",
  initialState: {
    contestantInfo: {},
  },
  reducers: {
    updateInfo: (state, action) => {
      state.contestantInfo = action.payload;
    },
  },
});

export const { updateInfo } = contestantState.actions;

export default contestantState.reducer;
