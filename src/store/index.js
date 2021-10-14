import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {profileSlice} from "./profile/slices";
import {chatsSlice} from "./chats/slices";

const rootReducer = combineReducers({
    profileReducer: profileSlice.reducer,
    chatsReducer: chatsSlice.reducer
});

export const store = configureStore({
    reducer: rootReducer
});