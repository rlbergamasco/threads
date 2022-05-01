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

export const closetSlice = createSlice({
    name: 'closet',
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
        }
    },
});

export const { changeSort, changeDisplay, changeSelectedTags } = closetSlice.actions;

export const selectSort = (state) => state.closet.sort;
export const selectDisplay = (state) => state.closet.display;
export const selectSelectedTags = (state) => state.closet.selectedTags;

export default closetSlice.reducer;
