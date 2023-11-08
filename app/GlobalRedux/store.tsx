"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import coinsFetcher from "./Features/coinsSlice";

const rootReducer = combineReducers({
  coins: coinsFetcher,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});
