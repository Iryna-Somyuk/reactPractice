import { createSlice } from "@reduxjs/toolkit";

const wordsSlice = createSlice({
    name: 'words',
    initialState: [],
    reducers: {
        addWord(state, action) {
            state.push(action.payload);
            },
            deleteWord(state, action){
                const index = state.findIndex(word => word.id === action.payload);
                state.splice(index, 1);
            }
    }
});
export const {addWord, deleteWord} = wordsSlice.actions;
export const wordsReducer = wordsSlice.reducer; 