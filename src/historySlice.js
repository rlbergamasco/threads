import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sort: 'Most Recently Worn',
    display: 'Grid',
    selectedTags: {
        Type: [],
        Color: [],
        Occasion: [],
        Weather: [],
        Other: [],
    },
}

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        changeSort: (state, action) => {
            state.sort = action.payload;
        },
        changeDisplay: (state, action) => {
            state.display = action.payload;
        },
        changeSelectedTags: (state, action) => {
            state.selectedTags[Object.keys(action.payload)[0]] = Object.values(action.payload)[0];
        },
        resetTags: (state) => {
            state.selectedTags = {
                Type: [],
                Color: [],
                Occasion: [],
                Weather: [],
                Other: [],
            }
        }
    },
});

export const { changeSort, changeDisplay, changeSelectedTags, resetTags } = historySlice.actions;

export const selectSort = (state) => state.history.sort;
export const selectDisplay = (state) => state.history.display;
export const selectSelectedTags = (state) => state.history.selectedTags;

export default historySlice.reducer;
