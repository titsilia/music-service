import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { musicApi, userApi } from "./fetch";

// все редьюсеры
const rootReducer = combineReducers({
  [musicApi.reducerPath]: musicApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

// store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDedault) =>
    getDedault().concat(musicApi.middleware).concat(userApi.middleware),
});
