import { createSlice } from "@reduxjs/toolkit";

const wordsSlice = createSlice({
    name: 'words',
    initialState: [],
    reducers: {
        addWord(state, action) {
            state.push(action.payload);
            }
    }
});

export const wordsReducer = wordsSlice.reducer; 