import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/post/postSlice";
import usersSlice from "../features/users/usersSlice";

export const store = configureStore({
    reducer: {
        post: postSlice.reducer,
        users: usersSlice.reducer
    }
})