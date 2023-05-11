import Link from "next/link";
import { useState } from "react";
//import { useState } from "react";
import OrderIcon from "../../public/icons/OrderIcon";
import TravelIcon from "../../public/icons/TravelIcon";
import UserIcon from "../../public/icons/UserIcon";
// import UserIcon from "../../public/icons/UserIcon";
interface ButtonType {
  name: string;
  path: string;
  icon: JSX.Element;
}
export default function SideMenu(): JSX.Element {
  const buttons = [
    { name: "Dashboard", path: "/", icon: <TravelIcon /> },
    { name: "Travels", path: "/travels", icon: <TravelIcon /> },
    { name: "Stories", path: "/allStories/1", icon: <OrderIcon /> },
    { name: "Users", path: "/allUser/1", icon: <UserIcon /> },
  ];
  const [color, setColor] = useState("");

  console.log(color);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleClick(e: any): void {
    setColor(e.target.innerText);
  }

  const activeClass =
    "flex justify-center items-center text-mycolor text-2xl text-2xl bg-slate-100 rounded-l-[50px] w-10/12 h-16 m-7";

  const inActiveClass =
    "flex justify-center items-center text-white text-2xl text-2xl bg-mycolor rounded-l-3xl w-10/12 h-16 m-7";
  const activeTop = "bg-mycolor h-8 w-8 rounded-br-full text-mycolor";
  const inActive = "bg-mycolor h-8 w-8  text-mycolor";
  const activeBottom = "bg-mycolor h-8 w-8 rounded-tr-full text-mycolor";

  return (
    <div className="w-1/6 h-screen flex bg-mycolor flex-col justify-center place-items-end">
      <ul className=" h-2/3 w-full flex flex-col content-end self-end place-items-end -mr-[28px]">
        {buttons.map((unit: ButtonType, index: number) => (
          <>
            <div
              key={index}
              className="rounded-none bg-slate-100 overflow-hidden -mb-[28px] mr-[28px]"
            >
              <div className={color === unit.name ? activeTop : inActive}>
                .
              </div>
            </div>

            <Link
              className={color === unit.name ? activeClass : inActiveClass}
              href={unit.path}
              onClick={handleClick}
            >
              {" "}
              {unit.icon}
              {unit.name}
            </Link>
            <div className="rounded-none bg-slate-100 overflow-hidden -mt-[28px] mr-[28px]">
              <div className={color === unit.name ? activeBottom : inActive}>
                .
              </div>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
}
