import Link from "next/link";
import { useRouter } from "next/router";
//import {  useState } from "react";
import OrderIcon from "../../public/icons/OrderIcon";
import TravelIcon from "../../public/icons/TravelIcon";
import UserIcon from "../../public/icons/UserIcon";

export default function SideMenu(): JSX.Element {
  //const [color, setColor] = useState("Orders");

  // function hadleClick(e: { target: { innerText: SetStateAction<string>; }; }): void {
  //   setColor(e.target.innerText);
  // }
  const route = useRouter();
  console.log(route.route);
  const activeClass =
    "text-white bg-cyan-500 shadow-lg shadow-cyan-600 text-2xl font-serif flex justify-center items-center  rounded-2xl w-9/12 h-16 m-7";

  const inActiveClass =
    "flex justify-center items-center  rounded-2xl w-9/12 h-16 m-7";

  return (
    <>
      <div className="w-3/12 h-screen flex justify-center bg-slate-200">
        <ul className="flex flex-col rounded-2xl  bg-slate-50 h-2/3 w-4/6  ">
          <Link
            className={route.route === "/stories" ? activeClass : inActiveClass}
            href={"/stories"}
          >
            {" "}
            <OrderIcon />
            Stories
          </Link>
          <Link
            className={route.route === "/travels" ? activeClass : inActiveClass}
            href={"/travels"}
          >
            {" "}
            <TravelIcon />
            Travels
          </Link>
          <Link
            className={route.route === "/users" ? activeClass : inActiveClass}
            href={"/users"}
          >
            {" "}
            <UserIcon /> Users
          </Link>
          <Link
            className={
              route.route === "/miniStory" ? activeClass : inActiveClass
            }
            href={"/miniStory"}
          >
            Mini Story
          </Link>
        </ul>
      </div>
    </>
  );
}
