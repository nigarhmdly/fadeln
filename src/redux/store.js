import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./reducers/DataSlice";



export const store = configureStore({
    reducer:{
        item: DataSlice
    }
})