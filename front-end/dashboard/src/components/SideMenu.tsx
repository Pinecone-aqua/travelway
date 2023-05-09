import Link from "next/link";
//import { useState } from "react";
import OrderIcon from "../../public/icons/OrderIcon";
import TravelIcon from "../../public/icons/TravelIcon";
import UserIcon from "../../public/icons/UserIcon";

export default function SideMenu(): JSX.Element {
  // const [color, setColor] = useState("Orders");

  // function handleClick(e: Event): void {
  //   e.preventDefault();
  //   const evetTarget = e.target as HTMLElement;
  //   setColor(evetTarget.innerText);
  // }

  // const activeClass =
  //   "text-white bg-cyan-500 shadow-2xl shadow-cyan-900 text-2xl font-serif flex justify-center items-center  rounded-2xl w-9/12 h-16 m-7";
  //   color === "Mini Story" ? activeClass :

  const inActiveClass =
    "flex justify-center items-center  rounded-2xl w-9/12 h-16 m-7";

  return (
    <>
      <div className="w-3/12 h-screen flex justify-center bg-slate-200">
        <ul className="flex flex-col rounded-2xl  bg-slate-50 h-2/3 w-4/6  shadow-lg shadow-cyan-100">
          <Link
            className={inActiveClass}
            href={"/allStories/1"}
            // onClick={handleClick}
          >
            {" "}
            <OrderIcon />
            Stories
          </Link>
          <Link
            className={inActiveClass}
            href={"/travels"}
            // onClick={handleClick}
          >
            {" "}
            <TravelIcon />
            Travels
          </Link>
          <Link
            className={inActiveClass}
            href={"/allUser/1"}
            // onClick={handleClick}
          >
            {" "}
            <UserIcon /> Users
          </Link>
          <Link className={inActiveClass} href={"/miniStory"}>
            Mini Story
          </Link>
        </ul>
      </div>
    </>
  );
}
