import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {gistsReducer} from "./reducer";
import {GISTS_DEFAULT_QUANTITY, GISTS_DEFAULT_URL, LOADING_STATUS, REJECTED_STATUS, RESOLVED_STATUS} from "./selector";

/**
 * Функция получения данных с сервера
 * @type {AsyncThunk<unknown, void, {}>}
 */
export const fetchDataThunk = createAsyncThunk(
    "gistsReducer/fetchDataThunkStatus",
    async ({url},{ rejectWithValue}) => {
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Fetching problem. Status: ${response.status}.
                 Enter correct address or press SET DEFAULT button.`);
            }
            let fetchedData = await response.json();
            return {fetchedData};
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

/**
 * Слайс компонента Gists
 * @type {Slice<{quantity: string, dataGists: *[], error: null, url: string, status: string}, {deleteData(*): void, setQuantity(*, *): void, setUrl(*, *): void}, string>}
 */
export const gistsSlice = createSlice({
    name: "gistsSlice",
    initialState: {
        dataGists: [],
        status: '',
        error: null,
        quantity: GISTS_DEFAULT_QUANTITY,
        url: GISTS_DEFAULT_URL
    },
    reducers: gistsReducer,
    extraReducers: {
        [fetchDataThunk.pending]: (state) => {
            state.status = LOADING_STATUS;
            state.error = null;
        },
        [fetchDataThunk.fulfilled]: (state, action) => {
            state.status = RESOLVED_STATUS;
            state.dataGists = action.payload.fetchedData;
        },
        [fetchDataThunk.rejected]: (state, action) => {
            state.status = REJECTED_STATUS;
            state.error = action.payload;
        },
    }
});

export const { deleteData, setQuantity, setUrl, } = gistsSlice.actions;