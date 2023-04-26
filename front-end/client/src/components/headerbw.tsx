/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { useState } from "react";
// import { useRouter } from "next/router";

export default function HeaderWhiteBlack(): JSX.Element {
  const [nav, setNav] = useState<null | string>();
  //   const  router = useRouter();

  function changeNav(e: any) {
    setNav(e.target.innerText);
  }
  return (
    <div className="relative sticky top-0 bg-white">
      <div className="flex gap-3 justify-center content-center text-center  text-slate-800  ">
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
          <Link href="/about">
            <button
              className={
                nav == "About"
                  ? "sm:text-[15px] text-[30px] xl:w-[15rem] md:w-[10rem] sm:w-[8rem] mt-3"
                  : "sm:text-[12.5px] w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-4"
              }
              onClick={changeNav}
            >
              About
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
          <div className="absolute right-0 mr-[1rem] flex items-center mt-4">
            {/* <input type="text" className="relative right-0 items-center" /> */}
            <button className="bg-pink-500 w-8 h-6">
              <picture>
                <img src="../../images/white.svg" alt="pic" className="w-5" />
              </picture>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}