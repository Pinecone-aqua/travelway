/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export default function Header(): JSX.Element {
  const [nav, setNav] = useState<null | string>();

  function changeNav(e: any) {
    setNav(e.target.innerText);
  }
  return (
    <div className="relative">
      <div className="flex gap-3 justify-center content-center text-center  text-white  ">
        <div className="flex w-[15rem] h-7">
          <button
            className={
              nav == "Travel"
                ? "text-[30px] w-[15rem] md:w-[10rem] sm:w-[8rem] mt-1"
                : "w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-3"
            }
            onClick={changeNav}
          >
            Travel
          </button>
          <button
            className={
              nav == "Our company"
                ? "text-[30px] w-[15rem] md:w-[10rem] sm:w-[8rem] mt-1"
                : "w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-3"
            }
            onClick={changeNav}
          >
            Our company
          </button>
        </div>
        <button
          className={
            nav == "Home"
              ? "text-[30px] w-[15rem] md:w-[10rem] sm:w-[8rem] mt-1"
              : "w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-3"
          }
          onClick={changeNav}
        >
          Home
        </button>
        <div className="flex w-[15rem] h-7 ">
          <button
            className={
              nav == "Gudget"
                ? "text-[30px] w-[15rem] md:w-[10rem] sm:w-[8rem] mt-1"
                : "w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-3"
            }
            onClick={changeNav}
          >
            Gudget
          </button>
          <button
            className={
              nav == "Contact us"
                ? "text-[30px] w-[15rem] md:w-[10rem] sm:w-[8rem] mt-1"
                : "w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-3"
            }
            onClick={changeNav}
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}
