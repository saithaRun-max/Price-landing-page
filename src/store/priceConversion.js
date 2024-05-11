import { createSlice } from "@reduxjs/toolkit";



const priceConversion = createSlice({
    name: "priceConversion",
    initialState: {
      status: true,
    },
    reducers: {
      sellectCurrency: (state, action) => {
        state.status = !state.status
       
      },
    },
  });
  
  export const { sellectCurrency } = priceConversion.actions;
  export default priceConversion.reducer;
  