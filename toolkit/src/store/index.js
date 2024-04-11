import {configureStore} from "@reduxjs/toolkit";
import taskSlice from "./Slice/taskSlice.js";

const store = configureStore({
    reducer: {
        task: taskSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        //Middleware personnalisé
    ])
})

export default store