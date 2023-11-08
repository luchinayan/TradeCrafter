"use client"; //this is a client side component

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IinitState {
  coins: [];
  status: string | null;
  error: string | null;
}

const initialState: IinitState = {
  coins: [],
  status: null,
  error: null,
};

export const fetchCoins = createAsyncThunk(
  "coins/fetchCoins",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch("http://localhost:8082/api/v1/rates");

      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const marketSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.pending, (state, action) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchCoins.fulfilled, (state, action) => {
      state.status = "resolved";
      state.coins = action.payload;
    });
    builder.addCase(fetchCoins.rejected, (state, action) => {
      //   setError();
    });
  },
});

export const {} = marketSlice.actions;

export default marketSlice.reducer;
