import { configureStore } from "@reduxjs/toolkit";
import durationStatusReducer from "./durationStatus";
import priceConversion from "./priceConversion";



const appStore = configureStore({
    reducer:{
        durationStatus:durationStatusReducer,
        priceConversion:priceConversion,
    

    }
})

export default appStore;