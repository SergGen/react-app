import {createStore} from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';

const defaultState = {
    checkboxState1: false,
    checkboxState2: false,
}

const reducer = (state = defaultState, action) => {
    switch (action?.type) {
        case "CHECK1":
            return {...state, checkboxState1: !state.checkboxState1};
        case "CHECK2":
            return {...state, checkboxState2: !state.checkboxState2};
        default: return state;
    }
}

export const store = createStore(reducer, composeWithDevTools());