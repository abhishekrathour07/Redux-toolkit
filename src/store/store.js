import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slicer/CounterSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    }
})