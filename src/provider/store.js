import { configureStore } from "@reduxjs/toolkit";
import throttle from "lodash/throttle";
import appReducer from "appSlice";
import { loadState, saveState } from "./persist";

const persistedState = loadState();

export const store = configureStore({
    reducer: {
        app: appReducer,
    },
    preloadedState: persistedState
});

store.subscribe(
    throttle(() => {
        saveState(store.getState())
    }, 1000)
)