/*  !!!Тестовый функционал!!!  */

import {createSlice} from "@reduxjs/toolkit";
import {profileReducers} from "./reducer";

/**
 * Слайс профиля
 * @type {Slice<{texts: string[], checkboxState2: boolean, count: number, checkboxState1: boolean}, {check1(*): void, check2(*): void, addText(*, *): void, increment(*): void}, string>}
 */
export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        userName: 'You',
        botName: 'Bot',
        botAnswer: 'Hi! I`m a bot.'
    },
    reducers: profileReducers
});

export const { changeName, changeBotAnswer } = profileSlice.actions;