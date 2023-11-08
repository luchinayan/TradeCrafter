"use client";
import { useDispatch } from "react-redux";
import HomeLayout from "./components/homelayout";
import { fetchCoins } from "./GlobalRedux/Features/coinsSlice";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, []);
  return (
    <div>
      <HomeLayout></HomeLayout>
    </div>
  );
}
