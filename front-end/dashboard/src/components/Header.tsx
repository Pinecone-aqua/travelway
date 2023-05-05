import Link from "next/link";
import DropProfile from "./profile/DropProfile";

export default function Header(): JSX.Element {
  return (
    <div className="flex justify-center bg-slate-50 rounded-b-3xl  shadow-lg shadow-cyan-100">
      <div className="container flex justify-between h-24 items-center">
        <Link href={"/"}>LOGO</Link>
        <div className="flex ">
          <input
            className="h-16 w-64  shadow-lg shadow-gray-500x rounded-s-3xl"
            type="text"
            placeholder="search"
          />
          <button className="bg-cyan-500 w-16 text-white shadow-lg shadow-gray-500/100 rounded-e-3xl">
            search
          </button>
        </div>

        <div>
          <DropProfile />
        </div>
      </div>
    </div>
  );
}
