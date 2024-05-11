import { createSlice } from "@reduxjs/toolkit";

const durationStatus = createSlice({
  name: "durationStatus",
  initialState: {
    status: true,
  },
  reducers: {
    changeDurationToMonthly: (state) => {
      state.status = !state.status;
     
    },
  },
});

export const { changeDurationToMonthly } = durationStatus.actions;
export default durationStatus.reducer;
