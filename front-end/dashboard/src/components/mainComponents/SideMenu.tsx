import { ButtonType } from "@/util/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import OrderIcon from "../../../public/icons/OrderIcon";
import TravelIcon from "../../../public/icons/TravelIcon";
import UserIcon from "../../../public/icons/UserIcon";

export default function SideMenu(): JSX.Element {
  const Buttons = [
    { name: "Хянах самбар", path: "/", icon: <TravelIcon /> },
    { name: "Аялалууд", path: "/travels/1", icon: <TravelIcon /> },
    { name: "Түүхүүд", path: "/stories/1", icon: <OrderIcon /> },
    { name: "Хэрэглэгчид", path: "/users/1", icon: <UserIcon /> },
  ];
  const activeClass =
    "flex justify-center items-center text-mycolor text-2xl text-2xl bg-slate-100 rounded-l-[50px] w-10/12 h-16 m-7";
  const inActiveClass =
    "flex justify-center items-center text-white text-2xl text-2xl bg-mycolor rounded-l-3xl w-10/12 h-16 m-7 hover:bg-slate-100 text-red-100";
  const activeTop = "bg-mycolor h-8 w-[180px] rounded-br-full text-mycolor";
  const inActive = "bg-mycolor h-8 w-8  text-mycolor decoration-none";
  const activeBottom = "bg-mycolor h-8 w-8 rounded-tr-full text-mycolor ";

  const [color, setcolor] = useState("Хянах самбар");
  useEffect(() => {
    if (localStorage.getItem("pagePath")) {
      const colorValue: ButtonType | undefined = Buttons.find(
        (menuPage: ButtonType) =>
          menuPage.path === localStorage.getItem("pagepath")
      );
      colorValue && setColor(colorValue.path);
    }
  }, []);
  function handleClick() {
    setColor(color);
    localStorage.setItem("pageValue", color);
  }
  console.log(color);

  return (
    <div className="w-1/6  h-[800px] flex bg-mycolor flex-col justify-center place-items-end decoration-double">
      {Buttons.map((unit: ButtonType, index: number) => (
        <div
          className="h-1/6 w-full flex flex-col content-end self-end place-items-end -mr-[28px]"
          key={index}
        >
          <div className="rounded-none  bg-slate-100 overflow-hidden -mb-[28px] mr-[28px]">
            <div className={color === unit.name ? activeTop : inActive}>.</div>
          </div>

          <Link
            className={color === unit.name ? activeClass : inActiveClass}
            href={unit.path}
            onClick={handleClick}
          >
            {unit.icon}
            {unit.name}
          </Link>
          <div className="rounded-none bg-slate-100 overflow-hidden -mt-[28px] mr-[28px]">
            <div className={color === unit.name ? activeBottom : inActive}>
              .
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
