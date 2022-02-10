import {createSlice, nanoid} from "@reduxjs/toolkit";
import {profileReducers} from "./reducer";
import {BOT_DEFAULT_ANSWER, BOT_DEFAULT_NAME, USER_DEFAULT_NAME} from "./selectors";

/**
 * Слайс профиля
 * @type {Slice<{texts: string[], checkboxState2: boolean, count: number, checkboxState1: boolean}, {check1(*): void, check2(*): void, addText(*, *): void, increment(*): void}, string>}
 */
export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        userData: {
            name: USER_DEFAULT_NAME,
            id: nanoid(10),
            userAuthEmail: ''
        },
        botData: {
            name: BOT_DEFAULT_NAME,
            answer: BOT_DEFAULT_ANSWER,
            id: nanoid(10)
        },
    },
    reducers: profileReducers
});

export const { changeName, changeBotAnswer, changeId, setUserAuth } = profileSlice.actions;