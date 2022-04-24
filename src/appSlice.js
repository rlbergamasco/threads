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
        // editOutfit: (state, action) => {
        //     state.outfits.find(el => el.id === action.payload.id) = action.payload;
        // },
        addItem: (state, action) => {
            state.items.append(action.payload);
        },
        // editItem: (state, action) => {
        //     state.items.find(el => el.id === action.payload.id) = action.payload;
        // },
        addTag: (state, action) => {
            state.tags.append(action.payload);
        },
        deleteTag: (state, action) => {
            state.tags = state.tags.filter(el => el.id === action.payload);
            // payload should just be tag id
        },
        changeSelected: (state, action) => {
            state.selected = action.payload;
        }
    },
});

export const { toggleIsDark, addOutfit, addItem, addTag, deleteTag, changeSelected } = appSlice.actions;

export const selectIsDark = (state) => state.app.isDark;
export const selectOutfits = (state) => state.app.outfits;
export const selectItems = (state) => state.app.items;
export const selectTags = (state) => state.app.tags;
export const selectSelected = (state) => state.app.selected;

export default appSlice.reducer;
