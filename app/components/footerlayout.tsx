import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function FooterLayout() {
  return (
    <div>
      <div className="flex justify-around max-w-7xl h-60 mx-auto  ">
        <Link href={"/"} className="flex items-center">
          <CloudQueueIcon color="primary" />
        </Link>
        <div className="flex flex-col justify-evenly h-full border-r-2 pr-[10%] border-r-neutral-s-3 text-neutral-s-1 hover:[&>a]:text-black">
          <Link href="/exchange">Exchange</Link>
          <Link href="/buy">Buy Crypto</Link>
          <Link href="/market">Market</Link>
        </div>

        <div className="flex flex-col  justify-evenly border-r-2 pr-[10%] border-r-neutral-s-3 ">
          <div>CONTACT</div>
          <div>
            Romania <br />
            street 1488 <br />
            22288-78891
          </div>
        </div>
        <div className="flex flex-col justify-evenly w-1/4">
          <div>NEWSLETTER</div>
          <div>
            Subscribe our newsletter to get more free design course and
            resource.
          </div>
          <div>
            <input className="border-primary-blue" type="text" />
          </div>
        </div>
      </div>
      <div className="border-t-2 border-t-red flex justify-around py-4">
        <div>Created by A.Ladieko & Y.Luchina</div>
        <div className="flex justify-between w-20">
          <Link href={"/"}>
            <InstagramIcon />
          </Link>
          <Link href={"/"}>
            <GitHubIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
