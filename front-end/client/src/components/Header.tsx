/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { useState } from "react";

export default function Header(): JSX.Element {
  const [nav, setNav] = useState<null | string>();

  function changeNav(e: any) {
    setNav(e.target.innerText);
  }
  return (
    <div className="relative sticky top-0  ">
      <div className="flex gap-3 justify-center content-center text-center  text-white  ">
        <div className="flex  h-7">
          <Link href="/travelJourney">
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
          </Link>
          <Link href="/ourCompany">
            <button
              className={
                nav == "Our company"
                  ? "sm:text-[15px] text-[30px] xl:w-[15rem] md:w-[10rem] sm:w-[8rem] mt-3"
                  : "sm:text-[12.5px] w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-4"
              }
              onClick={changeNav}
            >
              Our company
            </button>
          </Link>
        </div>
        <Link href="/home">
          <button
            className={
              nav == "Home"
                ? "text-[30px] w-[15rem] md:w-[10rem] sm:w-[8rem] "
                : "w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-3"
            }
            onClick={changeNav}
          >
            Home
          </button>
        </Link>
        <div className="flex  h-7 ">
          <Link href="/gadget">
            <button
              className={
                nav == "Gadget"
                  ? "text-[30px] w-[15rem] md:w-[10rem] sm:w-[8rem] mt-1"
                  : "w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-3"
              }
              onClick={changeNav}
            >
              Gadget
            </button>
          </Link>
          <Link href="/contuctUs">
            <button
              className={
                nav == "Contact us"
                  ? "text-[30px] sm:text-[20px] xl:w-[15rem] md:w-[10rem] sm:w-[8rem] mt-1"
                  : "w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-3"
              }
              onClick={changeNav}
            >
              Contact us
            </button>
          </Link>
        </div>
        <div>
          <button className="absolute right-0 mr-[1rem]">
            <picture>
              <img
                src="../../images/white.svg"
                alt="pic"
                className="w-4 mt-4"
              />
            </picture>
          </button>
        </div>
      </div>
    </div>
  );
}
