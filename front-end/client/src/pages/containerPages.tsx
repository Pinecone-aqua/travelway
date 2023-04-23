/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
// import TravelJourney from "./travelJourney";
// import ContuctUs from "./contuctUs";
// import Layout from "@/components/Layout";
// import Gadget from "./gadget";
// import Home from "./home";
import Link from "next/link";
// import Ourcompany from "./ourcompany";

export default function ContainerPages() {
  const [nav, setNav] = useState<null | string>();

  function changeNav(e: any) {
    setNav(e.target.innerText);
  }
  return (
    <>
      <div className="w-full xxl:h-[500px] xl:h-[400px] lg:h-[300px] md:h-[200px]  drop-shadow-2xl relative">
        <picture>
          <img
            src="./images/fuji.webp"
            alt="pic"
            className="w-full object-cover absolute h-[500px] h-full"
          />
        </picture>

        <div className="relative  top-1 fixed">
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
                    ? "text-[30px] w-[15rem] md:w-[10rem] sm:w-[8rem]"
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
          </div>
        </div>

        <div className="relative ms-5 h-full">
          {/* <h2 className="text-white  xxl:text-[10rem] xl:text-[8rem] md:text-[5rem] sm:text-[3rem] ">
            Japan
          </h2>
          <p className="text-white text-[20px]">visited 20 Septenber 2020</p> */}
        </div>
      </div>
      <div>
        {/* {nav == "Travel" ? (
      <TravelJourney />
    ) : nav == "Our company" ? (
      <Ourcompany />
    ) : nav == "Gadget" ? (
      <Gadget />
    ) : nav == "Contact us" ? (
      <ContuctUs />
    ) : (
      <Home />
    )} */}
      </div>
    </>
  );
}
