"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "../GlobalRedux/Features/coinsSlice";
import Image from "next/image";
import Link from "next/link";

export default function MarketTrends() {
  // const data = useSelector((state) => state.coins.coins);
  // console.log(data);

  const data = [
    {
      id: "bitcoin",
      symbol: "btc",
      name: "Bitcoin",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
      ath: 69045.0,
      atl: 67.81,
      current_price: 28523.0,
      market_cap: 556516479764,
      market_cap_rank: 1,
      fully_diluted_valuation: 598765823995,
      total_volume: 11793186988,
      high_24h: 28546.0,
      low_24h: 28188.0,
      price_change_24h: 183.95,
      price_change_percentage_24h: 0.64911,
      market_cap_change_24h: 4089763770,
      market_cap_change_percentage_24h: 0.74033,
      circulating_supply: 1.9518225e7,
      total_supply: 2.1e7,
      max_supply: 2.1e7,
      ath_change_percentage: -58.76106,
      ath_date: "2021-11-10T14:24:11.849Z",
      atl_change_percentage: 41890.48684,
      atl_date: "2013-07-06T00:00:00.000Z",
      last_updated: "2023-10-19T13:15:51.063Z",
    },
    {
      id: "ethereum",
      symbol: "eth",
      name: "Ethereum",
      image:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
      ath: 4878.26,
      atl: 0.432979,
      current_price: 1555.77,
      market_cap: 187034055322,
      market_cap_rank: 2,
      fully_diluted_valuation: 187034055322,
      total_volume: 7067361032,
      high_24h: 1578.02,
      low_24h: 1545.96,
      price_change_24h: -22.244469846146558,
      price_change_percentage_24h: -1.40965,
      market_cap_change_24h: -2961669901,
      market_cap_change_percentage_24h: -1.55881,
      circulating_supply: 1.20263584376151e8,
      total_supply: 1.20263584376151e8,
      max_supply: 0.0,
      ath_change_percentage: -68.17442,
      ath_date: "2021-11-10T14:24:19.604Z",
      atl_change_percentage: 358470.55862,
      atl_date: "2015-10-20T00:00:00.000Z",
      last_updated: "2023-10-19T13:15:54.805Z",
    },
    {
      id: "tether",
      symbol: "usdt",
      name: "Tether",
      image:
        "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
      ath: 1.32,
      atl: 0.572521,
      current_price: 1.0,
      market_cap: 83831916599,
      market_cap_rank: 3,
      fully_diluted_valuation: 83831916599,
      total_volume: 17506545568,
      high_24h: 1.002,
      low_24h: 0.997953,
      price_change_24h: -3.02076126617035e-4,
      price_change_percentage_24h: -0.03018,
      market_cap_change_24h: 123136043,
      market_cap_change_percentage_24h: 0.1471,
      circulating_supply: 8.38148829938953e10,
      total_supply: 8.38148829938953e10,
      max_supply: 0.0,
      ath_change_percentage: -24.49123,
      ath_date: "2018-07-24T00:00:00.000Z",
      atl_change_percentage: 74.50066,
      atl_date: "2015-03-02T00:00:00.000Z",
      last_updated: "2023-10-19T13:15:00.385Z",
    },
    {
      id: "binancecoin",
      symbol: "bnb",
      name: "BNB",
      image:
        "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
      ath: 686.31,
      atl: 0.0398177,
      current_price: 211.25,
      market_cap: 32496423076,
      market_cap_rank: 4,
      fully_diluted_valuation: 42242605285,
      total_volume: 251032400,
      high_24h: 212.75,
      low_24h: 208.47,
      price_change_24h: -1.4319439116435149,
      price_change_percentage_24h: -0.67329,
      market_cap_change_24h: -199425993,
      market_cap_change_percentage_24h: -0.60994,
      circulating_supply: 1.5385615e8,
      total_supply: 1.5385615e8,
      max_supply: 2.0e8,
      ath_change_percentage: -69.2831,
      ath_date: "2021-05-10T07:24:17.097Z",
      atl_change_percentage: 529343.19841,
      atl_date: "2017-10-19T00:00:00.000Z",
      last_updated: "2023-10-19T13:15:50.885Z",
    },
    {
      id: "ripple",
      symbol: "xrp",
      name: "XRP",
      image:
        "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
      ath: 3.4,
      atl: 0.00268621,
      current_price: 0.483973,
      market_cap: 25863457412,
      market_cap_rank: 5,
      fully_diluted_valuation: 48396257853,
      total_volume: 870050906,
      high_24h: 0.492173,
      low_24h: 0.477756,
      price_change_24h: -0.006314843813736093,
      price_change_percentage_24h: -1.28799,
      market_cap_change_24h: -310887311,
      market_cap_change_percentage_24h: -1.18776,
      circulating_supply: 5.3441027384e10,
      total_supply: 9.9988362642e10,
      max_supply: 1.0e11,
      ath_change_percentage: -85.79929,
      ath_date: "2018-01-07T00:00:00.000Z",
      atl_change_percentage: 17866.01059,
      atl_date: "2014-05-22T00:00:00.000Z",
      last_updated: "2023-10-19T13:15:49.946Z",
    },
    {
      id: "usd-coin",
      symbol: "usdc",
      name: "USDC",
      image:
        "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
      ath: 1.17,
      atl: 0.877647,
      current_price: 1.0,
      market_cap: 25418321832,
      market_cap_rank: 6,
      fully_diluted_valuation: 25416969591,
      total_volume: 4769645099,
      high_24h: 1.002,
      low_24h: 0.997484,
      price_change_24h: 2.2226e-4,
      price_change_percentage_24h: 0.02222,
      market_cap_change_24h: 112789286,
      market_cap_change_percentage_24h: 0.44571,
      circulating_supply: 2.5402704327971e10,
      total_supply: 2.54013529179057e10,
      max_supply: 0.0,
      ath_change_percentage: -14.81953,
      ath_date: "2019-05-08T00:40:28.300Z",
      atl_change_percentage: 13.81763,
      atl_date: "2023-03-11T08:02:13.981Z",
      last_updated: "2023-10-19T13:15:52.219Z",
    },
    {
      id: "staked-ether",
      symbol: "steth",
      name: "Lido Staked Ether",
      image:
        "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206",
      ath: 4829.57,
      atl: 482.9,
      current_price: 1552.46,
      market_cap: 13701324940,
      market_cap_rank: 7,
      fully_diluted_valuation: 13701324940,
      total_volume: 7171264,
      high_24h: 1578.99,
      low_24h: 1545.65,
      price_change_24h: -26.356103921194062,
      price_change_percentage_24h: -1.66935,
      market_cap_change_24h: -217171687,
      market_cap_change_percentage_24h: -1.56031,
      circulating_supply: 8826936.67529275,
      total_supply: 8826936.67529275,
      max_supply: 8826936.67529275,
      ath_change_percentage: -67.90983,
      ath_date: "2021-11-10T14:40:47.256Z",
      atl_change_percentage: 220.94216,
      atl_date: "2020-12-22T04:08:21.854Z",
      last_updated: "2023-10-19T13:15:55.732Z",
    },
    {
      id: "solana",
      symbol: "sol",
      name: "Solana",
      image:
        "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
      ath: 259.96,
      atl: 0.500801,
      current_price: 24.21,
      market_cap: 10084050376,
      market_cap_rank: 8,
      fully_diluted_valuation: 13564387821,
      total_volume: 492220407,
      high_24h: 24.38,
      low_24h: 23.28,
      price_change_24h: 0.439835,
      price_change_percentage_24h: 1.85016,
      market_cap_change_24h: 169731902,
      market_cap_change_percentage_24h: 1.71199,
      circulating_supply: 4.16599923226691e8,
      total_supply: 5.60382258556824e8,
      max_supply: 0.0,
      ath_change_percentage: -90.71548,
      ath_date: "2021-11-06T21:54:35.825Z",
      atl_change_percentage: 4719.47234,
      atl_date: "2020-05-11T19:35:23.449Z",
      last_updated: "2023-10-19T13:15:51.088Z",
    },
    {
      id: "cardano",
      symbol: "ada",
      name: "Cardano",
      image:
        "https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090",
      ath: 3.09,
      atl: 0.01925275,
      current_price: 0.243181,
      market_cap: 8487199782,
      market_cap_rank: 9,
      fully_diluted_valuation: 10941869446,
      total_volume: 122051875,
      high_24h: 0.24681,
      low_24h: 0.240102,
      price_change_24h: -0.003596484276716466,
      price_change_percentage_24h: -1.45738,
      market_cap_change_24h: -119499629,
      market_cap_change_percentage_24h: -1.38845,
      circulating_supply: 3.49048206155728e10,
      total_supply: 4.5e10,
      max_supply: 4.5e10,
      ath_change_percentage: -92.13711,
      ath_date: "2021-09-02T06:00:10.474Z",
      atl_change_percentage: 1160.70513,
      atl_date: "2020-03-13T02:22:55.044Z",
      last_updated: "2023-10-19T13:15:48.514Z",
    },
    {
      id: "dogecoin",
      symbol: "doge",
      name: "Dogecoin",
      image:
        "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
      ath: 0.731578,
      atl: 8.69e-5,
      current_price: 0.058361,
      market_cap: 8256551801,
      market_cap_rank: 10,
      fully_diluted_valuation: 8256538962,
      total_volume: 156602722,
      high_24h: 0.05888,
      low_24h: 0.058003,
      price_change_24h: -3.92203616554274e-4,
      price_change_percentage_24h: -0.66755,
      market_cap_change_24h: -55822703,
      market_cap_change_percentage_24h: -0.67156,
      circulating_supply: 1.41476106383705e11,
      total_supply: 1.41475886383705e11,
      max_supply: 0.0,
      ath_change_percentage: -92.03669,
      ath_date: "2021-05-08T05:08:23.458Z",
      atl_change_percentage: 66937.1899,
      atl_date: "2015-05-06T00:00:00.000Z",
      last_updated: "2023-10-19T13:15:58.520Z",
    },
  ];
  // .data.currencyRates.slice(0, 10)
  return (
    <div className="max-w-7xl mx-auto mb-20">
      <div className="grid grid-cols-7 gap-8 justify-items-center  text-gray-500 border-b-2 border-gray-200 pb-4">
        <div>#</div>
        <div>Name</div>
        <div>Price</div>
        <div>24h %</div>
        <div>Marketcap</div>
        <div>Volume(24h)</div>
        <div>Chart</div>
      </div>
      {data &&
        data.map((val: any) => {
          return (
            <Link
              href={"/exchange"}
              className="grid my-4 py-4 grid-cols-7 rounded-xl  justify-items-center gap-8 hover:bg-gray-100"
              key={val.id}>
              <div>{val.market_cap_rank}</div>
              <div className="flex justify-start">
                <div className="flex items-center w-max justify-start">
                  <Image
                    width={30}
                    height={30}
                    src={val.image}
                    alt={val.image}
                    className="mx-2"
                  />
                  {val.name}
                  <div className="text-gray-400 ml-2">{val.symbol}</div>
                </div>
              </div>
              <div>
                {val.current_price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
              <div
                className={`${
                  val.price_change_percentage_24h.toString().startsWith("-")
                    ? "text-primary-orange"
                    : "text-primary-green"
                }
                          `}>
                {!val.price_change_percentage_24h.toString().startsWith("-") &&
                  "+"}
                {val.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div>
                {val.market_cap.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
              <div>
                {" "}
                {val.total_volume.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
              <div>7</div>
            </Link>
          );
        })}
    </div>
  );
}
