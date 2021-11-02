import {createSlice} from "@reduxjs/toolkit";
import {chatsPartReducer} from "./reducer";

/**
 * Слайс списка чатов
 * @type {Slice<{chatsList: {}}, {addChatPart(*, *): void, deleteChatPart(*, *): void, catchCurrentTextDraft(*, *): void}, string>}
 */
export const chatsPartSlice = createSlice({
    name: "chatsPartSlice",
    initialState: {
        chatsList: {},
    },
    reducers: chatsPartReducer
});

/**
 * Экшены списка чатов
 */
export const {addChatPart, deleteChatPart, catchCurrentTextDraft, dropChatsPart} = chatsPartSlice.actions;