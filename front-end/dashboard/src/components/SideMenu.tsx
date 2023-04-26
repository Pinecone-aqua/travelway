import Link from "next/link";
import { useRouter } from "next/router";
//import { useState } from "react";
import OrderIcon from "../../public/icons/OrderIcon";
import TravelIcon from "../../public/icons/TravelIcon";
import UserIcon from "../../public/icons/UserIcon";

export default function SideMenu(): JSX.Element {
  // const [color, setColor] = useState("Orders");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // function hadleClick(e: any): void {
  //   // setColor(e.target.innerText);
  // }
  const route = useRouter();

  return (
    <>
      <div className="w-3/12 h-screen flex justify-center bg-slate-200">
        <ul className="flex flex-col rounded-2xl  bg-slate-50 h-2/3 w-4/6  shadow-xl shadow-cyan-500">
          <Link
            className={
              route.route === "/orders"
                ? " text-white bg-cyan-500 shadow-2xl shadow-cyan-900 text-2xl font-serif flex justify-center items-center  rounded-2xl w-9/12 h-16 m-7"
                : "flex justify-center items-center  rounded-2xl w-9/12 h-16 m-7"
            }
            href={"/orders"}
          >
            {" "}
            <OrderIcon />
            Orders
          </Link>
          <Link
            className={
              route.route === "/travels"
                ? "text-white bg-cyan-500 shadow-xl shadow-cyan-900  text-2xl font-serif flex justify-center items-center  rounded-2xl w-9/12 h-16 m-7"
                : "flex justify-center items-center rounded-2xl w-9/12 h-16 m-7"
            }
            href={"/travels"}
          >
            {" "}
            <TravelIcon />
            Travels
          </Link>
          <Link
            className={
              route.route === "/users"
                ? "text-white bg-cyan-500 shadow-2xl shadow-cyan-900   text-2xl font-serif flex justify-center items-center  rounded-2xl w-9/12 h-16 m-7"
                : "flex justify-center items-center  rounded-2xl w-9/12 h-16 m-7"
            }
            href={"/users"}
          >
            {" "}
            <UserIcon /> Users
          </Link>
        </ul>
      </div>
    </>
  );
}
