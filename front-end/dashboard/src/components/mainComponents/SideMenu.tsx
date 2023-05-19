import { ButtonType } from "@/util/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import DashboardIcon from "../icons/DashboardIcon";
import StoryIcon from "../icons/StoryIcon";
import TravelIcon from "../icons/TravelIcon";
import UserIcon from "../icons/UserIcon";

export default function SideMenu(): JSX.Element {
  const Buttons = useMemo(
    () => [
      { name: "Хянах самбар", path: "/", icon: <DashboardIcon /> },
      { name: "Аялалууд", path: "/travels/1", icon: <TravelIcon /> },
      { name: "Түүхүүд", path: "/stories/1", icon: <StoryIcon /> },
      { name: "Хэрэглэгчид", path: "/users/1", icon: <UserIcon /> },
    ],
    []
  );

  const activeClass =
    "flex justify-between px-4 items-center text-mycolor text-2xl bg-slate-100 rounded-l-[50px] w-10/12 h-16 m-7";
  const inActiveClass =
    "flex justify-between px-4 items-center text-white text-2xl bg-mycolor rounded-l-3xl w-10/12 h-16 m-7 hover:opacity-50 hover:text-black";
  const inActive = "bg-mycolor h-8 w-8  text-mycolor decoration-none";

  const activeTop = "bg-mycolor h-full w-full rounded-br-full";
  const activeBottom = "bg-mycolor h-full w-full rounded-tr-full";

  const [button, setButton] = useState("Хянах самбар");

  useEffect(() => {
    if (localStorage.getItem("sideButton")) {
      const buttonValue = Buttons.find(
        (button: ButtonType) =>
          button.name === localStorage.getItem("sideButton")
      );
      buttonValue && setButton(buttonValue.name);
    }
  }, [Buttons]);

  function handleClick(name: string) {
    setButton(name);
    localStorage.setItem("sideButton", name);
  }
  console.log();

  return (
    <div className="w-1/6  h-[700px] flex bg-mycolor flex-col justify-center place-items-end decoration-double">
      <Image
        src="/images/travel-logo.png"
        alt="logo"
        width={150}
        height={10}
        className="m-auto"
      />
      {Buttons.map((unit: ButtonType, index: number) => (
        <div
          className="h-1/6 w-full flex flex-col content-end self-end place-items-end -mr-[28px]"
          key={index}
        >
          <div className="h-8 w-8 bg-slate-100 overflow-hidden -mb-[28px] mr-[28px]">
            <div className={button === unit.name ? activeTop : inActive}>
              {}
            </div>
          </div>

          <Link
            className={button === unit.name ? activeClass : inActiveClass}
            href={unit.path}
            onClick={() => handleClick(unit.name)}
          >
            {unit.icon}
            {unit.name}
          </Link>
          <div className="h-8 w-8 bg-slate-100 overflow-hidden -mt-[28px] mr-[28px]">
            <div className={button === unit.name ? activeBottom : inActive}>
              {}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
