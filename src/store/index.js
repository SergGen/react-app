import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {profileSlice} from "./profile/slices";
import {chatsPartSlice} from "./chats/chatsPart/slice";
import {messagesPartSlice} from "./chats/messagesPart/slice";
import autoMergeLevel1 from "reduxjs-toolkit-persist/es/stateReconciler/autoMergeLevel1";
import storage from 'reduxjs-toolkit-persist/lib/storage'
import persistReducer from "reduxjs-toolkit-persist/es/persistReducer";
import persistStore from "reduxjs-toolkit-persist/es/persistStore";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "reduxjs-toolkit-persist/es/constants";

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel1,
};

const rootReducer = combineReducers({
    profileReducer: profileSlice.reducer,
    chatsPartReducer: chatsPartSlice.reducer,
    messagesPartReducer: messagesPartSlice.reducer
});

const _persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: _persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            /* ignore persistance actions */
            ignoredActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER
            ],
        },
    }),
});

export let persistor = persistStore(store);