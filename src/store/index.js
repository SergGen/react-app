import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {profileSlice} from "./profile/slice";
import {chatsPartSlice} from "./chats/chatsPart/slice";
import {messagesPartSlice} from "./chats/messagesPart/slice";
import {gistsSlice} from "./gists/slice";
import {autoMergeLevel1, persistReducer, persistStore} from "reduxjs-toolkit-persist/es";
import storage from 'reduxjs-toolkit-persist/lib/storage'
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "reduxjs-toolkit-persist/es/constants";

const persistConfig = {
    key: 'root',
    storage: storage,
    version: 1,
    stateReconciler: autoMergeLevel1,
};

const rootReducer = combineReducers({
    profileReducer: profileSlice.reducer,
    chatsPartReducer: chatsPartSlice.reducer,
    messagesPartReducer: messagesPartSlice.reducer,
    gistsReducer: gistsSlice.reducer
});

const _persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: _persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export let persistor = persistStore(store);