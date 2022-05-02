import { createSlice } from "@reduxjs/toolkit";
import outfits from "data/outfits.json";
import items from "data/clothing-items.json";
import tags from "data/tags.json";

const initialState = {
    isDark: false,
    outfits: outfits,
    items: items,
    tags: tags,
    selected: 'home',
    closetSort: 'Most Recently Worn',
    historySort: 'Most Recently Worn',
    closetDisplay: 'Grid',
    historyDisplay: 'Grid',
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleIsDark: (state) => {
            state.isDark = !state.isDark;
        },
        addOutfit: (state, action) => {
            state.items.append(action.payload);
        },
        editOutfit: (state, action) => {
            let idx = state.outfits.findIndex(el => el.id === action.payload.id);
            state.outfits[idx] = action.payload;
        },
        addItem: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        editItem: (state, action) => {
            let idx = state.items.findIndex(el => el.id === action.payload.id);
            console.log(idx);
            state.items[idx] = action.payload;
        },
        addTag: (state, action) => {
            state.tags = [...state.tags, action.payload];
        },
        deleteTag: (state, action) => {
            state.tags = state.tags.filter(el => el.id !== action.payload);
            // payload should just be tag id
        },
        changeSelected: (state, action) => {
            state.selected = action.payload;
        },
        changeClosetSort: (state, action) => {
            state.closetSort = action.payload;
        },
        changeHistorySort: (state, action) => {
            state.historySort = action.payload;
        },
        changeClosetDisplay: (state, action) => {
            state.closetDisplay = action.payload;
        },
        changeHistoryDisplay: (state, action) => {
            state.historyDisplay = action.payload;
        }
    },
});

export const { toggleIsDark, addOutfit, editOutfit, addItem, editItem, addTag, deleteTag, changeSelected, changeClosetSort, changeHistorySort, changeClosetDisplay, changeHistoryDisplay } = appSlice.actions;

export const selectIsDark = (state) => state.app.isDark;
export const selectOutfits = (state) => state.app.outfits;
export const selectItems = (state) => state.app.items;
export const selectTags = (state) => state.app.tags;
export const selectSelected = (state) => state.app.selected;
export const selectClosetSort = (state) => state.app.closetSort;
export const selectHistorySort = (state) => state.app.historySort;
export const selectClosetDisplay = (state) => state.app.closetDisplay;
export const selectHistoryDisplay = (state) => state.app.historyDisplay;

export default appSlice.reducer;
