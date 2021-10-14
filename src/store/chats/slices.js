import {createSlice} from "@reduxjs/toolkit";
import {chatsReducers} from "./reducers";

export const chatsSlice = createSlice({
    name: "chatsReducer",
    initialState: {
        chats: {
            'chat111111111': {
                nameChat: 'Chat 1',
                messages: []
            }
        }
    },
    reducers: chatsReducers
});

export const {addChat, deleteChat, sendMessage} = chatsSlice.actions;