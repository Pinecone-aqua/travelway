import Link from "next/link";
import DropProfile from "../profile/DropProfile";

export default function Header(): JSX.Element {
  return (
    <div className="flex justify-center ">
      <div className="container flex justify-between h-24 items-center">
        <Link className="text-3xl" href={"/"}>
          Хянах самбар test
        </Link>
        <div className="flex ">
          <input
            className="h-12 w-72 p-3 bg-white border-2 color-mycolor rounded-s-3xl"
            type="text"
            placeholder="хайх утга"
          />
          <button className="bg-gradient-to-r from-tocolor to-mycolor w-16 text-white  rounded-e-3xl">
            хайх
          </button>
        </div>

        <div>
          <DropProfile />
        </div>
      </div>
    </div>
  );
}
