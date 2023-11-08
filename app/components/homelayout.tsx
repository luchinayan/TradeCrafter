"use client";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import cardBuy from "../../public/card-pic-1.png";
import cardTrade from "../../public/card-pic-2.png";
import cardMarket from "../../public/card-pic-3.png";
import cardImgHomePage from "../../public/cards.png";
import NavBarFooterLayoutHOC from "./navbar-footer-layout";
import TopMarket from "./top-market";

type dataT = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  img?: any;
}[];

export default function HomeLayout() {
  return (
    <NavBarFooterLayoutHOC>
      <div className="flex items-center mx-auto max-w-7xl">
        <div className="w-6/12">
          <div className="text-6xl  font-bold">
            Buy & sell <br /> crypto in minutes
          </div>
          <div className="text-s mt-4 font-light text-neutral-s-1">
            Trade Bitcoin, Ethereum, USDT, and the top altcoins on the legendary
            crypto asset exchange.
          </div>
          <button
            className=" bg-primary-blue text-white text-s font-normal py-2 px-6 mt-10 rounded-3xl transform
                                transition duration-200  hover:scale-110">
            Get started now
          </button>
        </div>
        <div className="">
          <Image src={cardImgHomePage} alt="cardmain"></Image>
        </div>
      </div>
      <Suspense
        fallback={<div className="text-8xl text-red-500">Loading.....</div>}>
        <TopMarket />
      </Suspense>
      <div>
        <div className="min-h-screen  bg-neutral-s-4">
          <div className="flex flex-col items-center justify-center pt-6">
            <div className=" leading-tight text-5xl font-semibold">
              Become a crypto <br /> trader in seconds
            </div>
            <div className="mt-4  text-neutral-s-1">
              We've got everything you need to start trading.
            </div>
          </div>
          <div className="flex justify-center max-w-7xl mx-auto items-center mt-24">
            <div className="flex flex-col   items-center rounded-3xl bg-white pt-12 px-6 mr-8">
              <Image src={cardBuy} alt="cardbuy"></Image>
              <div className="text-2xl my-4">Buy & Sell Crypto</div>
              <div className="text-center">
                We realize ideas from simple to complex, everything becomes easy
                to use and reach the most potential customers.
              </div>
              <Link
                href={"/buy"}
                className="my-6 py-2 px-4 text-sm font-semibold border-2 rounded-3xl hover:bg-neutral-b-1 translate transform duration-200 hover:text-white">
                Buy Crypto
              </Link>
            </div>
            <div className="flex flex-col   items-center rounded-3xl bg-white pt-12 px-6 mr-8">
              <Image src={cardTrade} alt="cardtrade"></Image>
              <div className="text-2xl my-4">Trade Assets</div>
              <div className="text-center">
                We realize ideas from simple to complex, everything becomes easy
                to use and reach the most potential customers.
              </div>
              <Link
                href={"/exchange"}
                className="my-6 py-2 px-4 text-sm font-semibold border-2 rounded-3xl hover:bg-neutral-b-1 translate transform duration-200 hover:text-white">
                Trade Now
              </Link>
            </div>
            <div className="flex flex-col bg-white rounded-3xl  pt-12 px-6 mr-8 items-center">
              <Image src={cardMarket} alt="cardmarket"></Image>
              <div className="text-2xl my-4">Market</div>
              <div className="text-center">
                We realize ideas from simple to complex, everything becomes easy
                to use and reach the most potential customers.
              </div>
              <Link
                href={"/market"}
                className="my-6 py-2 px-4 text-sm font-semibold border-2 rounded-3xl hover:bg-neutral-b-1 translate transform duration-200 hover:text-white">
                Market
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10">
            <Link
              className="bg-primary-blue text-white text-s font-normal py-2 px-6  rounded-3xl transform
                                transition duration-200  hover:scale-110"
              href={"/contacts"}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </NavBarFooterLayoutHOC>
  );
}
