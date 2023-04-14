import Link from "next/link";
import { SetStateAction, useState } from "react";
import OrderIcon from "../../public/icons/OrderIcon";
import TravelIcon from "../../public/icons/TravelIcon";
import UserIcon from "../../public/icons/UserIcon";

export default function SideMenu(): JSX.Element {
  const [color, setColor] = useState();
  function hadleClick(e: any): void {
    setColor(e.target.innerText);
  }
  return (
    <>
      <div className="w-3/12 h-screen flex justify-center bg-slate-200 ">
        <ul className="flex flex-col rounded-2xl  bg-slate-50 h-2/3 w-4/6">
          <Link
            className={
              color === "Orders"
                ? "bg-blue-200 text-blue-600 text-2xl font-serif flex justify-center items-center  rounded-2xl w-9/12 h-16 m-7"
                : "flex justify-center items-center  rounded-2xl w-9/12 h-16 m-7"
            }
            href={"/orders"}
            onClick={hadleClick}
          >
            {" "}
            <OrderIcon />
            Orders
          </Link>
          <Link
            className={
              color === "Travels"
                ? "bg-blue-200 text-blue-600 text-2xl font-serif flex justify-center items-center  rounded-2xl w-9/12 h-16 m-7"
                : "flex justify-center items-center rounded-2xl w-9/12 h-16 m-7"
            }
            href={"/travels"}
            onClick={hadleClick}
          >
            {" "}
            <TravelIcon />
            Travels
          </Link>
          <Link
            className={
              color === "Users"
                ? "bg-blue-200 text-blue-600 text-2xl font-serif flex justify-center items-center  rounded-2xl w-9/12 h-16 m-7"
                : "flex justify-center items-center  rounded-2xl w-9/12 h-16 m-7"
            }
            href={"/users"}
            onClick={hadleClick}
          >
            {" "}
            <UserIcon /> Users
          </Link>
        </ul>
      </div>
    </>
  );
}
