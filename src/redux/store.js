import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { musicApi, userApi } from "./fetch";
import { filtersSlice, trackSlice } from "./action-creators";

// все редьюсеры
const rootReducer = combineReducers({
  [musicApi.reducerPath]: musicApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [filtersSlice.name]: filtersSlice.reducer,
  [trackSlice.name]: trackSlice.reducer,
});

// store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) =>
    getDefault().concat(musicApi.middleware).concat(userApi.middleware),
});
