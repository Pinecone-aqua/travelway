import Link from "next/link";
import DropProfile from "./DropProfile";

export default function Header(): JSX.Element {
  return (
    <div className="flex justify-center bg-slate-50 rounded-b-3xl">
      <div className="container flex justify-between h-24 items-center">
        <Link href={"/"}>LOGO</Link>
        <div className="flex">
          <input
            className="h-16 w-64 rounded-s-3xl"
            type="text"
            placeholder="search"
          />
          <button className="bg-purple-300 w-16 rounded-e-3xl">haih</button>
        </div>

        <div>
          <DropProfile />
        </div>
      </div>
    </div>
  );
}
