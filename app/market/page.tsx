"use client";
import Image from "next/image";
import marketImg from "../../public/market-pic.png";
import NavBarFooterLayoutHOC from "../components/navbar-footer-layout";
import TopMarket from "../components/top-market";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "../GlobalRedux/Features/coinsSlice";
import MarketTrends from "../components/market-trends";

export default function Market() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCoins());
  // }, []);
  // type dataT = {
  //   id: string;
  //   rank: string;
  //   symbol: string;
  //   name: string;
  //   supply: string;
  //   maxSupply: string | null;
  //   marketCapUsd: string;
  //   volumeUsd24Hr: string;
  //   priceUsd: string;
  //   changePercent24Hr: string;
  //   vwap24Hr: string;
  //   img?: any;
  // }[];
  // const data: dataT = [
  //   {
  //     id: "bitcoin",
  //     rank: "1",
  //     symbol: "BTC",
  //     name: "Bitcoin",
  //     supply: "17193925.0000000000000000",
  //     maxSupply: "21000000.0000000000000000",
  //     marketCapUsd: "119150835874.4699281625807300",
  //     volumeUsd24Hr: "2927959461.1750323310959460",
  //     priceUsd: "6929.8217756835584756",
  //     changePercent24Hr: "+0.8101417214350335",
  //     vwap24Hr: "7175.0663247679233209",
  //     img: btc,
  //   },
  //   {
  //     id: "ethereum",
  //     rank: "2",
  //     symbol: "ETH",
  //     name: "Ethereum",
  //     supply: "101160540.0000000000000000",
  //     maxSupply: null,
  //     marketCapUsd: "40967739219.6612727047843840",
  //     volumeUsd24Hr: "1026669440.6451482672850841",
  //     priceUsd: "404.9774667045200896",
  //     changePercent24Hr: "-0.0999626159535347",
  //     vwap24Hr: "415.3288028454417241",
  //     img: eth,
  //   },
  //   {
  //     id: "ripple",
  //     rank: "3",
  //     symbol: "XRP",
  //     name: "XRP",
  //     supply: "39299874590.0000000000000000",
  //     maxSupply: "100000000000.0000000000000000",
  //     marketCapUsd: "16517228249.2902868380922380",
  //     volumeUsd24Hr: "149328134.5032677889393019",
  //     priceUsd: "0.4202870472643482",
  //     changePercent24Hr: "-1.9518258685302665",
  //     vwap24Hr: "0.4318239230821224",
  //     img: xrp,
  //   },
  // ];
  return (
    <NavBarFooterLayoutHOC>
      <div className="h-[40rem] bg-secondary-purple ">
        <div className="flex  justify-between items-center max-w-7xl mx-auto">
          <div className="text-6xl font-semibold  ">
            Today’s <br /> Cryptocurrency <br /> prices
          </div>
          <div>
            <Image src={marketImg} alt="cardmarket"></Image>
          </div>
        </div>
      </div>
      <div className="relative top-[-6rem]">
        <Suspense
          fallback={
            <div className="bg-red-500 w-full h-screen">Loading.....</div>
          }>
          <TopMarket />
        </Suspense>
      </div>
      <div>
        <MarketTrends></MarketTrends>
      </div>
    </NavBarFooterLayoutHOC>
  );
}
