import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import Link from "next/link";

export default function NavBarLayout() {
  return (
    <div className="border-b-2 border-gray-200 ">
      <div className="flex justify-between py-5 mx-auto max-w-7xl">
        <div className="w-6/12 flex  items-center justify-between">
          <Link className="text-2xl font-bold border-r-2 pr-16" href="/">
            <CloudQueueIcon color="primary" /> TradeCrafter
          </Link>
          <Link
            className="decoration-primary-blue hover:underline underline-offset-8"
            href={"/exchange"}>
            Exchange
          </Link>
          <Link
            className="decoration-primary-blue hover:underline underline-offset-8"
            href={"/buy"}>
            Buy Crypto
          </Link>
          <Link
            className="decoration-primary-blue hover:underline underline-offset-8"
            href="/market">
            Market
          </Link>
        </div>
        <Link href={"/profile"}>profile</Link>
      </div>
    </div>
  );
}
