import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-3xl bg-neutral-s-3">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="text-primary-blue" href="/">
        Return Home
      </Link>
    </div>
  );
}
