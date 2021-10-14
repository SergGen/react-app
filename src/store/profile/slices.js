/*  !!!Тестовый функционал!!!  */

import {createSlice} from "@reduxjs/toolkit";
import {profileReducers} from "./reducers";

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        checkboxState1: false,
        checkboxState2: false,
        count: 0,
        texts: ['uno', 'quarto']
    },
    reducers: profileReducers
});

export const {check1, check2, increment, addText} = profileSlice.actions;