import {createSlice} from "@reduxjs/toolkit";
import {messagesPartReducer} from "./reducer";

/**
 * Слайс списков сообщений чатов
 * @type {Slice<{messagesList: {}}, {addMessagesPart(*, *): void, deleteMessagesPart(*, *): void, sendMessage(*, *): void}, string>}
 */
export const messagesPartSlice = createSlice({
    name: "messagesPartSlice",
    initialState: {
        messagesList: {},
    },
    reducers: messagesPartReducer,
});
/**
 * Экшены списков сообщений чатов
 */
export const { sendMessage, deleteMessagesPart, addMessagesPart, dropMessagesPart } = messagesPartSlice.actions;