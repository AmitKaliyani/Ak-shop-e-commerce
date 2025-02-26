import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";

 const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        filter: filterSlice.reducer
    }
})



export default store